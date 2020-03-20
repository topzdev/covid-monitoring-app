import { Store } from "vuex";
import { getModule } from "vuex-module-decorators";
import IHomeModule from "~/store/home";

let homeStore: IHomeModule;

function initialiseStores(store: Store<any>): void {
  homeStore = getModule(IHomeModule, store);
}

export { initialiseStores, homeStore, IHomeModule };
