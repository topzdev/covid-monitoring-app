<template>
  <div class="country__tally">
    <country-trend-chart
      v-for="item in tally"
      :key="item.title"
      :icon="item.icon"
      :title="item.title"
      :color="item.color"
      :value="item.value"
    ></country-trend-chart>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import CountryTrendChart from "@/components/charts/CountryTrendChart.vue";
import {
  mdiAccountSupervisorOutline,
  mdiSkullCrossbones,
  mdiHospitalBoxOutline,
  mdiChevronDown
} from "@mdi/js";

@Component({
  components: { CountryTrendChart }
})
export default class CountryTally extends Vue {
  icons = {
    infected: mdiAccountSupervisorOutline,
    death: mdiSkullCrossbones,
    recovered: mdiHospitalBoxOutline,
    toggle: mdiChevronDown
  };
  get tally() {
    return [
      {
        icon: this.icons.infected,
        title: "Total Cases",
        value: "90,0000",
        color: "cases"
      },
      {
        icon: this.icons.death,
        title: "Total Death",
        value: "90,0000",
        color: "death"
      },
      {
        icon: this.icons.recovered,
        title: "Total Recovered",
        value: "90,0000",
        color: "recovered"
      }
    ];
  }
}
</script>


<style>
</style>