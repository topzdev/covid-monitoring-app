import { Store } from "vuex";
import { getModule } from "vuex-module-decorators";
import home from "~/store/home";

let homeStore: home;

function initialiseStores(store: Store<any>): void {
  homeStore = getModule(home, store);
}

export { initialiseStores, homeStore };
