<template>
  <div class="country__tally-item">
    <div class="country__tally-header">
      <div class="country__tally-icon" :class="iconColor">
        <base-icon :svg="icon"></base-icon>
      </div>
      <h3 class="country__tally-title" v-text="title" />
    </div>
    <h2 class="country__tally-total" v-text="value" />
    <div class="country__tally-chart" :class="chartColor"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class CountryTrendChart extends Vue {
  @Prop(String) readonly icon: String | undefined;
  @Prop(String) readonly value: String | undefined;
  @Prop(String) readonly title: String | undefined;
  @Prop(String) readonly color: String | undefined;

  get chartColor() {
    return `chart--${this.color}`;
  }
  get iconColor() {
    return `color--${this.color}`;
  }
}
</script>


<style>
</style>