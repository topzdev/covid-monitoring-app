x<template>
  <div class="global-stat">
    <ul class="global-stat__tally">
      <li
        v-for="item in tally"
        :key="item.title"
        :aria-label="item.title"
        :title="item.title"
        class="global-stat__tally-item"
      >
        <div class="global-stat__tally-icon" :class="item.color">
          <base-icon :svg="item.icon"></base-icon>
        </div>

        <h1 class="global-stat__tally-total" v-text="item.value" />
        <div class="global-stat__tally-title" v-text="item.title" />
      </li>
    </ul>

    <ul class="global-stat__others">
      <li
        class="global-stat__others-item"
        v-for="item in otherTally"
        :key="item.title"
        :aria-label="item.title"
        :title="item.title"
      >
        <div class="global-stat__others-total" v-text="item.value" />
        <div class="global-stat__others-title" v-text="item.title" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import {
  mdiAccountSupervisorOutline,
  mdiSkullCrossbones,
  mdiHospitalBoxOutline
} from "@mdi/js";
import IWorldStat from "../interfaces/IWorldStat";

@Component
export default class GloalStats extends Vue {
  @Prop(Object) stat!: IWorldStat;
  @Prop(Array) affected_countries!: Array<String>;

  icons = {
    infected: mdiAccountSupervisorOutline,
    recovered: mdiHospitalBoxOutline,
    death: mdiSkullCrossbones
  };

  get tally() {
    return [
      {
        icon: this.icons.infected,
        title: "Total Global Cases",
        value: this.stat.total_cases,
        color: "color--infected"
      },
      {
        icon: this.icons.recovered,
        title: "Total Global Recovered",
        value: this.stat.total_recovered,
        color: "color--recovered"
      },

      {
        icon: this.icons.death,
        title: "Total Global Death",
        value: this.stat.total_deaths,
        color: "color--death"
      }
    ];
  }

  get otherTally() {
    return [
      {
        title: "Latest Cases",
        value: this.stat.new_cases
      },
      {
        title: "Latest Death",
        value: this.stat.new_cases
      },

      {
        title: "Total Countries Affected",
        value: this.affected_countries.length + " / 195"
      },

      {
        title: "Global Infected Percentage (%)",
        value: (
          (parseInt(this.stat.total_cases) / 7_794_798_739) *
          100
        ).toFixed(8)
      }
    ];
  }
}
</script>

<style>
</style>