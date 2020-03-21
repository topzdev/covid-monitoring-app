import { VuexModule, Module, Action, Mutation } from "vuex-module-decorators";
import { homeStore } from "~/plugins/store-accessor";
import countryCode from "~/utils/countryCode";
import { $axios } from "~/utils/axios";

@Module({ name: "country", namespaced: true })
export default class Country extends VuexModule {
  private topic: String = "COVID";
  private currentNews: Array<object> = [];

  @Mutation
  private SET_CURRENT_NEWS(news: Array<object>) {
    this.currentNews = news;
  }

  @Action({ commit: "SET_CURRENT_NEWS" })
  async getCurrentNews(country: string) {
    const resultCode = countryCode.filter(
      item => item.name.toLocaleLowerCase() === country.toLowerCase()
    );

    if (resultCode === undefined || resultCode.length < 0) return;

    let code = resultCode[0].code.toLowerCase();

    // const result = await $axios.$get(
    //   `http://newsapi.org/v2/top-headlines?country=${code}&q=${this.topic}&apiKey=${process.env.NEWS_API_KEY}`
    // );

    return [];
  }
}
