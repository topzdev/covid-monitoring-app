<template>
  <div class="home">
    <div class="home__container">
      <client-only>
        <home-page-map
          appId="HSRyu7aoCRHbeFVcxHE5"
          appCode="an4PsuurwqRp47qzbthhar-tUFFho8Jmk5quReCz6s4"
          lat="37.7397"
          lng="-121.4252"
          width="100%"
          height="100%"
        ></home-page-map>
      </client-only>
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
    console.log(homeStore.getWorldStat);
    return homeStore.getWorldStat;
  }

  get affectedCountries() {
    return homeStore.getAffectedCountries;
  }

  created() {
    console.log(process.env.HERE_DEV_API_KEY);
  }
}
</script>

