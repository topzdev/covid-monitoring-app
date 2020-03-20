<template>
  <div class="home">
    <home-page-map></home-page-map>
    <div class="home__container">
      <div class="home__sidebar">
        <search-bar></search-bar>
        <p class="home__total-results"></p>
        <div class="home__scrollable">
          <div class="home__cases">
            <card-primary v-for="stat in casesInCountries" :key="stat.country_name" :stat="stat"></card-primary>
          </div>
        </div>
      </div>

      <div class="home__body">
        <global-stat :stat="globalStat" :affected_countries="affectedCountries"></global-stat>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import HomePageMap from "@/components/map/HomePageMap.vue";
import SearchBar from "@/components/search/SearchBar.vue";
import CardPrimary from "@/components/cards/CardPrimary.vue";
import GlobalStat from "@/components/GlobalStats.vue";
import { homeStore, IHomeModule } from "@/store";
@Component({
  components: { HomePageMap, SearchBar, CardPrimary, GlobalStat }
})
export default class Homepage extends Vue {
  get casesInCountries() {
    return homeStore.getSearchCountries || homeStore.getAllCasesCountry;
  }

  get globalStat() {
    return homeStore.getWorldStat;
  }

  get affectedCountries() {
    return homeStore.getAffectedCountries;
  }
}
</script>

