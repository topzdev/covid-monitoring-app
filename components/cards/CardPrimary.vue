<template>
  <div class="card card--primary">
    <div class="card--primary__body">
      <div class="card--primary__header">
        <div class="card--primary__icon">
          <img src alt />
        </div>
        <div class="card--primary__country">China</div>

        <button class="btn card--primary__toggle ml-auto">
          <base-icon :svg="icons.toggle"></base-icon>
        </button>
      </div>

      <ul class="card--primary__tally">
        <li class="card--primary__tally-item" v-for="item in tally" :key="item.title">
          <div class="card--primary__tally-body">
            <div v-if="item.icon" class="card--primary__tally-icon" :class="item.color">
              <base-icon :svg="item.icon"></base-icon>
            </div>
            <h3 class="card--primary__total" v-text="format(item.value)" />
          </div>
          <div class="card--primary__tally-title" v-text="item.title" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import numeral from "numeral";
import {
  mdiAccountSupervisorOutline,
  mdiSkullCrossbones,
  mdiHospitalBoxOutline,
  mdiChevronDown
} from "@mdi/js";
@Component
export default class CardPrimary extends Vue {
  @Prop(String) flag: String | undefined;
  @Prop(Object) data: Object | undefined;

  toggle = false;
  icons = {
    infected: mdiAccountSupervisorOutline,
    death: mdiSkullCrossbones,
    recovered: mdiHospitalBoxOutline,
    toggle: mdiChevronDown
  };

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

  get tally() {
    return [
      {
        icon: this.icons.infected,
        title: "Total Cases",
        value: "98,000",
        color: "color--infected"
      },
      {
        icon: this.icons.death,
        title: "Total Death",
        value: "3,000",
        color: "color--death"
      },
      {
        icon: this.icons.recovered,
        title: "Total Recovered",
        value: "98,000",
        color: "color--recovered"
      },
      {
        title: "Total Recovered",
        value: "98,000",
        color: "color--recovered"
      }
    ];
  }

  format(value: number) {
    return numeral(value).format("0,0");
  }
}
</script>

<style>
</style>