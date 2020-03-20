<template>
  <div class="country">
    <div class="country__body">
      <country-header></country-header>
      <country-tally></country-tally>
    </div>
    <country-tweets></country-tweets>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import CountryTweets from "@/components/country/CountryTweets.vue";
import CountryHeader from "@/components/country/CountryHeader.vue";
import CountryTally from "@/components/country/CountryTally.vue";
@Component({
  components: {
    CountryTweets,
    CountryHeader,
    CountryTally
  }
})
export default class CountryPage extends Vue {}
</script>

<style>
</style>