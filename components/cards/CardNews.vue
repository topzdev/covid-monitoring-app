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
  news: IHeadlineNews = {
    source: {
      id: "techcrunch",
      name: "TechCrunch"
    },
    author: "Romain Dillet",
    title: "Bitcoin is also having a very, very bad day",
    description:
      "Bitcoin is going through a remarkably bad day. It turns out all assets are having a rough month — including cryptocurrencies. A couple of hours ago, the average price of BTC dropped by 15% in just 20 minutes. On CoinGecko, 1 BTC was worth around $7,250 across…",
    url:
      "http://techcrunch.com/2020/03/12/bitcoin-is-also-having-a-very-very-bad-day/",
    urlToImage:
      "https://techcrunch.com/wp-content/uploads/2019/04/bitcoin-bitfinex.jpg?w=750",
    publishedAt: "2020-03-12T12:34:45Z",
    content:
      "Bitcoin is going through a remarkably bad day. It turns out all assets are having a rough month including cryptocurrencies. A couple of hours ago, the average price of BTC dropped by 15% in just 20 minutes.\r\nOn CoinGecko, 1 BTC was worth around $7,250 across"
  };

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