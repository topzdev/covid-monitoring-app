<template>
  <div class="card--primary__others"></div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
export default class CardPrimaryOthers extends Vue {
  result = {
    country_name: "China",
    cases: "80928",
    deaths: "3245",
    region: "",
    total_recovered: "70,420",
    new_deaths: "8",
    new_cases: "34",
    serious_critical: "2,274",
    active_cases: "7,263",
    total_cases_per_1m_population: "56"
  };
}
</script>
</script>

<style>
</style>

