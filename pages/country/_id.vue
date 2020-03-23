<template>
  <div class="country">
    <div class="country__body">
      <div class="country__main">
        <country-header :title="title"></country-header>
        <country-tally v-if="latest" :tallies="tallies" :latest="latest"></country-tally>
        <country-other v-if="latest" :latest="latest"></country-other>
      </div>

      <country-news></country-news>
    </div>
    <country-tweets></country-tweets>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import CountryTweets from "@/components/country/CountryTweets.vue";
import CountryHeader from "@/components/country/CountryHeader.vue";
import CountryTally from "@/components/country/CountryTally.vue";
import CountryOther from "@/components/country/CountryOther.vue";
import CountryNews from "@/components/country/CountryNews.vue";
import dayjs from "dayjs";
import { countryStore } from "@/store";

@Component({
  components: {
    CountryTweets,
    CountryHeader,
    CountryTally,
    CountryOther,
    CountryNews
  }
})
export default class CountryPage extends Vue {
  created() {
    countryStore.fetchHistoryStateOfCountry(this.$nuxt.$route.params.id);
    countryStore.fetchLatestStateOfCountry(this.$nuxt.$route.params.id);
  }
  get tallies() {
    return countryStore.getCountryHistory;
  }
  get latest() {
    return countryStore.getLatestStat;
  }
  get title() {
    return this.$nuxt.$route.params.id;
  }
}
</script>

<style>
</style>