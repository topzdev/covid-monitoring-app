<template>
  <div class="card--primary__others">
    <ul class="card--primary__tally">
      <li
        class="card--primary__tally-item"
        v-for="item in tally"
        :key="item.title"
        :title="item.title"
        :aria-label="item.title"
      >
        <div class="card--primary__tally-body">
          <div v-if="item.icon" class="card--primary__tally-icon" :class="item.color">
            <base-icon :svg="item.icon"></base-icon>
          </div>
          <h3 class="card--primary__total" v-text="item.value" />
        </div>
        <div class="card--primary__tally-title" v-text="item.title" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import ICountryStat from "../../../interfaces/ICountryStat";

@Component
export default class CardPrimaryOthers extends Vue {
  @Prop(Object) stat!: ICountryStat;

  get tally() {
    return [
      {
        title: "Active Cases",
        value: this.stat.active_cases
      },
      {
        title: "New Cases",
        value: this.stat.new_cases
      },
      {
        title: "Latest Death",
        value: this.stat.new_deaths
      },

      {
        title: "Critical",
        value: this.stat.serious_critical
      },

      {
        title: "Cases per 1M Population",
        value: this.stat.total_cases_per_1m_population
      }
    ];
  }
}
</script>

<style>
</style>

