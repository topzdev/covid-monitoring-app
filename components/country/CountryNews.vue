<template>
  <div class="country__news">
    <h1 class="heading--secondary mb-1">Headline News</h1>

    <div class="country__news-list">
      <div class="row">
        <div v-for="item in news" :key="item.title" class="col-4 mb-2">
          <card-news :news="item"></card-news>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import CardNews from "@/components/cards/CardNews.vue";
import IHeadlineNews from "../../interfaces/IHeadlineNews";
import { countryStore } from "@/store";
@Component({
  components: { CardNews }
})
export default class CountryNews extends Vue {
  created() {
    countryStore.fetchCurrentNews(this.$nuxt.$route.params.id);
  }

  get news() {
    return countryStore.getCurrentNews;
  }
}
</script>

<style>
</style>