import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators";
import { $axios } from "~/utils/axios";
import config from "~/utils/axios-config";
import ICountryStat from "~/interfaces/ICountryStat";
import ICaseByCountry from "~/interfaces/ICaseByCountry";
import {
  ILatestStatByCountry,
  ILastestStatByCountryInfo
} from "~/interfaces/ILatestStatByCountry";
import IWorldStat from "~/interfaces/IWorldStat";
import IAffectedCountries from "~/interfaces/IAffectedCountries";

@Module({
  name: "home",
  namespaced: true
})
export default class Home extends VuexModule {
  cases_by_country: Array<ICountryStat> = [];
  affected_countries: Array<string> = [];
  latest_stat_by_country: Array<ILatestStatByCountry> = [];
  world_stat?: IWorldStat | undefined;
  searched: Array<ICountryStat> | null = null;
  text = "hello";

  get getAllCasesCountry() {
    return this.cases_by_country;
  }

  get getLatestStatByCountry() {
    return this.latest_stat_by_country;
  }

  get getWorldStat() {
    return this.world_stat;
  }

  get getAffectedCountries() {
    console.log(this.affected_countries);
    return this.affected_countries;
  }

  get getSearchCountries() {
    return this.searched;
  }

  @Mutation
  private SET_CASE_BY_COUNTRIES(cases: Array<ICountryStat>) {
    this.cases_by_country = cases;
  }

  @Mutation
  private SET_LATEST_STAT_BY_COUNTRY(cases: Array<ILatestStatByCountry>) {
    this.latest_stat_by_country = cases;
  }

  @Mutation
  private SET_WORLD_STAT(stat: IWorldStat) {
    this.world_stat = stat;
  }

  @Mutation
  private SET_AFFECTED_COUNTRIES(countries: Array<string>) {
    this.affected_countries = countries;
  }

  @Mutation
  private SET_SEARCHED_COUNTRY(search: string) {
    if (search === "") return (this.searched = null);

    this.searched = this.cases_by_country.filter(item =>
      item.country_name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  }

  @Action({ commit: "SET_CASE_BY_COUNTRIES" })
  async fetchCaseByCountry() {
    const result: ICaseByCountry = await $axios.$get(
      "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",
      config
    );
    return result.countries_stat;
  }

  @Action({ commit: "SET_WORLD_STAT" })
  async fetchWorldState() {
    const result: IWorldStat = await $axios.$get(
      "https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php",
      config
    );

    return result;
  }

  @Action({ commit: "SET_AFFECTED_COUNTRIES" })
  async fetchAffectedCountries() {
    const result: IAffectedCountries = await $axios.get(
      "https://coronavirus-monitor.p.rapidapi.com/coronavirus/affected.php",
      config
    );

    return result.affected_countries;
  }

  @Action({ commit: "SET_SEARCHED_COUNTRY" })
  async searchCountry(search: string) {
    return search;
  }
}
