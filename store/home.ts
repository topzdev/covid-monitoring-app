import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators";

@Module({
  name: "home"
})
export default class Home extends VuexModule {
  countries: Array<Object> = [];
  specific_country: Object = {};
  world_stat: Object = {};
  cases_by_particular_country: Object = {};
}
