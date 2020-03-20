import { ActionTree, MutationTree, Store } from "vuex";
import { RootState } from "~/interfaces/IRoot";
import { initialiseStores } from "@/plugins/store-accessor";
import { $axios } from "~/utils/axios";
import config from "~/utils/axios-config";
import ICountryStat from "~/interfaces/ICountryStat";
import ICaseByCountry from "~/interfaces/ICaseByCountry";
import IWorldStat from "~/interfaces/IWorldStat";
import IAffectedCountries from "~/interfaces/IAffectedCountries";
const initializer = (store: Store<any>) => initialiseStores(store);
export const plugins = [initializer];
export * from "@/plugins/store-accessor";

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit({ commit, dispatch }, context) {
    const countries: ICaseByCountry = await $axios.$get(
      "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",
      config
    );

    commit("home/SET_CASE_BY_COUNTRIES", countries.countries_stat);

    const worldStat: IWorldStat = await $axios.$get(
      "https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php",
      config
    );

    commit("home/SET_WORLD_STAT", worldStat);

    const affectedCountries: IAffectedCountries = await $axios.$get(
      "https://coronavirus-monitor.p.rapidapi.com/coronavirus/affected.php",
      config
    );

    commit("home/SET_AFFECTED_COUNTRIES", affectedCountries.affected_countries);
  }
};
