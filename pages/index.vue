<template>
  <div class="home">
    <home-page-map></home-page-map>
    <div class="home__container">
      <div class="home__sidebar">
        <search-bar></search-bar>

        <div class="home__countries">
          <card-primary></card-primary>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import HomePageMap from "@/components/map/HomePageMap.vue";
import SearchBar from "@/components/search/SearchBar.vue";
import CardPrimary from "@/components/cards/CardPrimary.vue";
@Component({
  components: { HomePageMap, SearchBar, CardPrimary }
})
export default class Homepage extends Vue {}
</script>

