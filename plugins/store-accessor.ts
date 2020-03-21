import { Store } from "vuex";
import { getModule } from "vuex-module-decorators";
import IHomeModule from "@/store/home";
import ICountryModule from "@/store/country";

let homeStore: IHomeModule;
let countryStore: ICountryModule;

function initialiseStores(store: Store<any>): void {
  homeStore = getModule(IHomeModule, store);
  countryStore = getModule(ICountryModule, store);
}

export {
  initialiseStores,
  homeStore,
  countryStore,
  ICountryModule,
  IHomeModule
};
