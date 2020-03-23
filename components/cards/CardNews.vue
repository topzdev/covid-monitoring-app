<template>
  <div class="card--news">
    <div class="card--news__image">
      <img :src="news.urlToImage" alt="Covid Image" />

      <span class="overlay"></span>
    </div>

    <div class="card--news__headline">
      <p class="card--news__date" v-text="dateFormat" />
      <a
        :href="news.url"
        rel="noreferrer"
        target="_blank"
        class="card--news__heading"
        v-text="headline"
      />
      <p class="card--news__publisher" v-text="news.author" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import IHeadlineNews from "@/interfaces/IHeadlineNews";
import cliTruncate from "cli-truncate";
import dayjs from "dayjs";

@Component
export default class CardNews extends Vue {
  @Prop(Array) readonly news!: IHeadlineNews;

  get dateFormat() {
    return dayjs(this.news.publishedAt).format("MMMM DD, YYYY");
  }

  get headline() {
    return cliTruncate(this.news.title, 50);
  }
}
</script>

<style>
</style>