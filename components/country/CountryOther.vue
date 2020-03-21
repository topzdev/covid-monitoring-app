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
        <h1 class="country__other-total" v-text="item.value" />
        <p class="country__other-title" v-text="item.title" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { countryStore } from "../../store";

@Component
export default class CountryOthers extends Vue {
  get tally() {
    return [
      {
        title: "Active Cases",
        value: "6,037"
      },
      {
        title: "New Cases",
        value: "567"
      },
      {
        title: "Latest Death",
        value: "7"
      },
      {
        title: "Critical",
        value: "1,927"
      },
      {
        title: "Cases per 1M Population",
        value: "56"
      },
      {
        title: "Total Infected % base on population",
        value: "0.0043"
      }
    ];
  }

  created() {
    countryStore.getCurrentNews("Philippines");
  }
}
</script>

<style>
</style>