<template>
  <div class="country__tally">
    <country-trend-chart
      v-for="item in tally"
      :key="item.title"
      :icon="item.icon"
      :title="item.title"
      :color="item.color"
      :value="item.value"
      :history="item.history"
    ></country-trend-chart>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import CountryTrendChart from "@/components/charts/CountryTrendChart.vue";
import {
  mdiAccountSupervisorOutline,
  mdiSkullCrossbones,
  mdiHospitalBoxOutline,
  mdiChevronDown
} from "@mdi/js";
import { ILatestStatByCountry } from "../../interfaces/ILatestStatByCountry";

@Component({
  components: { CountryTrendChart }
})
export default class CountryTally extends Vue {
  @Prop(Array) tallies!: Array<ILatestStatByCountry>;
  @Prop(Object) latest!: ILatestStatByCountry;

  created() {
    console.log(this.latest);
  }

  icons = {
    infected: mdiAccountSupervisorOutline,
    death: mdiSkullCrossbones,
    recovered: mdiHospitalBoxOutline,
    toggle: mdiChevronDown
  };

  get tally() {
    if (!this.tallies.length) return null;

    return [
      {
        icon: this.icons.infected,
        title: "Total Cases",
        value: this.latest.total_cases,
        color: "cases",
        history: this.tallies.map(item => {
          return {
            value: item.total_cases.replace(",", ""),
            date: item.record_date
          };
        })
      },
      {
        icon: this.icons.death,
        title: "Total Death",
        value: this.latest.total_deaths,
        color: "death",
        history: this.tallies.map(item => {
          return {
            value: item.total_deaths.replace(",", ""),
            date: item.record_date
          };
        })
      },
      {
        icon: this.icons.recovered,
        title: "Total Recovered",
        value: this.latest.total_recovered,
        color: "recovered",
        history: this.tallies.map(item => {
          return {
            value: item.new_deaths.replace(",", ""),
            date: item.record_date
          };
        })
      }
    ];
  }
}
</script>


<style>
</style>