import { VuexModule, Module, Action, Mutation } from "vuex-module-decorators";
import countryCode from "~/utils/countryCode";
import { $axios } from "~/utils/axios";
import {
  ILastestStatByCountryInfo,
  ILatestStatByCountry
} from "~/interfaces/ILatestStatByCountry";
import config from "~/utils/axios-config";
import { ILatestHistory } from "~/interfaces/ILatestHistory";
import dayjs from "dayjs";

@Module({ name: "country", namespaced: true })
export default class Country extends VuexModule {
  topic: String = "COVID";
  currentNews: Array<object> = [];
  latest_stat_by_country: ILatestStatByCountry | undefined = undefined;
  history_stat_of_country: Array<ILatestStatByCountry> = [];

  get getCountryHistory(): Array<ILatestStatByCountry> {
    return this.history_stat_of_country!;
  }

  get getLatestStat(): ILatestStatByCountry {
    return this.latest_stat_by_country!;
  }

  get getCurrentNews() {
    return this.currentNews;
  }

  @Mutation
  private SET_CURRENT_NEWS(news: Array<object>) {
    this.currentNews = news;
  }

  @Mutation
  private SET_LATEST_STAT_BY_COUNTRY(cases: ILatestStatByCountry) {
    this.latest_stat_by_country = cases;
  }

  @Mutation
  private SET_HISTORY_STAT_OF_COUNTRY(histories: Array<ILatestStatByCountry>) {
    let holder: string | null = null;
    let arrayHolder = [];
    let filtered = histories.filter((item, i) => {
      let value: string = dayjs(item.record_date).format("MMMM/DD/YYYY");
      if (holder !== value) {
        holder = value;
        return item;
      }
    });

    console.log(
      filtered.map(item => {
        return { value: item.new_cases, date: item.record_date };
      })
    );
    this.history_stat_of_country = filtered;
  }

  @Action({ commit: "SET_CURRENT_NEWS" })
  async fetchCurrentNews(country: string) {
    const resultCode = countryCode.filter(
      item => item.name.toLocaleLowerCase() === country.toLowerCase()
    );

    if (resultCode === undefined || resultCode.length < 0) return;

    let code = resultCode[0].code.toLowerCase();

    const result = await $axios.$get(
      `http://newsapi.org/v2/top-headlines?country=${code}&q=${this.topic}&apiKey=${process.env.NEWS_API_KEY}`
    );

    return result.articles;
  }

  @Action({ commit: "SET_LATEST_STAT_BY_COUNTRY" })
  async fetchLatestStateOfCountry(country: string) {
    const result: ILastestStatByCountryInfo = await $axios.$get(
      `https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country=${country.toLowerCase()}`,
      config
    );
    console.log("hello", result.latest_stat_by_country[0]);
    return result.latest_stat_by_country[0];
  }

  @Action({ commit: "SET_HISTORY_STAT_OF_COUNTRY" })
  async fetchHistoryStateOfCountry(country: string) {
    const result: ILatestHistory = await $axios.$get(
      `https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_particular_country.php?country=${country.toLowerCase()}`,
      config
    );
    return result.stat_by_country;
  }
}
