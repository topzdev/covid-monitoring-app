<template>
  <div class="country__news">
    <h1 class="heading--secondary mb-1">News</h1>

    <div class="country__news-list">
      <card-news></card-news>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import CardNews from "@/components/cards/CardNews.vue";
@Component({
  components: { CardNews }
})
export default class CountryNews extends Vue {}
</script>

<style>
</style>