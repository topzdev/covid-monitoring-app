<template>
  <div class="country__headers">
    <h1 class="heading--primary">Philippines</h1>

    <search-bar class="ml-auto"></search-bar>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import SearchBar from "@/components/search/SearchBar.vue";
@Component({
  components: { SearchBar }
})
export default class CountryHeader extends Vue {}
</script>


<style>
</style>