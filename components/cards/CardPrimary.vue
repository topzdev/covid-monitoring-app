<template>
  <div class="card card--primary">
    <div class="card--primary__body">
      <div class="card--primary__header">
        <nuxt-link
          :to="resultLink"
          class="card--primary__country"
          :aria-label="stat.country_name"
          v-text="stat.country_name"
          :title="stat.country_name"
        />

        <button
          class="btn card--primary__toggle ml-auto"
          @click="toggle = !toggle"
          aria-label="more info"
          :title="toggleText"
        >
          <base-icon :svg="icons.toggle"></base-icon>
        </button>
      </div>

      <ul class="card--primary__tally">
        <li
          class="card--primary__tally-item"
          v-for="item in tally"
          :key="item.title"
          :aria-label="item.title"
          :title="item.title"
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
    <card-primary-others :stat="stat" :class="{'others-show': toggle}" :aria-expanded="toggle"></card-primary-others>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import CardPrimaryOthers from "@/components/cards/primary/CardPrimaryOthers.vue";
import numeral from "numeral";
import {
  mdiAccountSupervisorOutline,
  mdiSkullCrossbones,
  mdiHospitalBoxOutline,
  mdiChevronDown
} from "@mdi/js";
import ICountryStat from "../../interfaces/ICountryStat";
@Component({
  components: { CardPrimaryOthers }
})
export default class CardPrimary extends Vue {
  @Prop(Object) stat!: ICountryStat;

  toggle = false;
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
        value: this.stat.cases,
        color: "color--cases"
      },
      {
        icon: this.icons.death,
        title: "Total Death",
        value: this.stat.deaths,
        color: "color--death"
      },
      {
        icon: this.icons.recovered,
        title: "Total Recovered",
        value: this.stat.total_recovered,
        color: "color--recovered"
      }
    ];
  }

  get toggleText() {
    return !this.toggle ? "More Information " : "Hide Information";
  }

  get resultLink() {
    return `/country/${this.stat.country_name.toLowerCase()}`;
  }
}
</script>

<style>
</style>