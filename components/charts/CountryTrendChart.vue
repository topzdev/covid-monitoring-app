<template>
  <div class="country__tally-item">
    <div class="country__tally-header">
      <div class="country__tally-icon" :class="iconColor">
        <base-icon :svg="icon"></base-icon>
      </div>
      <h3 class="country__tally-title" v-text="info.title" />
    </div>
    <h2 class="country__tally-total" v-text="info.value" />

    <trend-chart
      :datasets="[dataset]"
      :interactive="true"
      :min="0"
      padding="5 5 0"
      @mouse-move="onMouseMove"
    ></trend-chart>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import dayjs from "dayjs";

interface IInfo {
  title: string | undefined;
  value: string | undefined;
}

@Component
export default class CountryTrendChart extends Vue {
  @Prop(String) readonly icon: string | undefined;
  @Prop(String) readonly value: string | undefined;
  @Prop(String) readonly title: string | undefined;
  @Prop(String) readonly color: string | undefined;
  @Prop(Array) readonly history: Array<object> | undefined;
  @Prop(String) readonly curve: string | undefined;

  get info() {
    return { title: this.title, value: this.value };
  }

  get chartColor() {
    return `chart--${this.color}`;
  }
  get iconColor() {
    return `color--${this.color}`;
  }

  get dataset() {
    return {
      data: this.history,
      showPoints: true,
      fill: true,
      className: `curve--${this.color}`
    };
  }

  onMouseMove(params: any) {
    if (!params) {
      this.info.title = this.title;
      this.info.value = this.value;
      return;
    }

    this.info.value = params.data[0].value || "--";
    this.info.title = dayjs(params.data[0].date).format("MMMM DD, YYYY");
  }

  created() {
    console.log(this.value);
  }
}
</script>


<style>
</style>