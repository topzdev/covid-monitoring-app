<template>
  <div class="country">
    <div class="country__body">
      <div class="country__main">
        <country-header></country-header>
        <country-tally></country-tally>
        <country-other></country-other>
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
@Component({
  components: {
    CountryTweets,
    CountryHeader,
    CountryTally,
    CountryOther,
    CountryNews
  }
})
export default class CountryPage extends Vue {}
</script>

<style>
</style>