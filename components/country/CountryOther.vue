<template>
  <div class="country__other">
    <ul class="country__other-tally">
      <li
        v-for="item in tally"
        :key="item.title"
        :aria-label="item.title"
        :title="item.title"
        class="country__other-item"
      >
        <h1 class="country__other-total" v-text="item.value || '--'" />
        <p class="country__other-title" v-text="item.title" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { countryStore } from "../../store";
import { ILatestStatByCountry } from "../../interfaces/ILatestStatByCountry";

@Component
export default class CountryOthers extends Vue {
  @Prop(Object) latest!: ILatestStatByCountry;
  get tally() {
    return [
      {
        title: "Active Cases",
        value: this.latest.active_cases
      },
      {
        title: "New Cases",
        value: this.latest.new_deaths
      },
      {
        title: "Latest Death",
        value: this.latest.new_deaths
      },
      {
        title: "Critical",
        value: this.latest.serious_critical
      },
      {
        title: "Cases per 1M Population",
        value: this.latest.total_cases_per1m
      },
      {
        title: "Total Infected % base on population",
        value: "0.0043"
      }
    ];
  }
}
</script>

<style>
</style>