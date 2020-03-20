<template>
  <div class="search-bar">
    <input
      type="text"
      class="inp inp--search"
      placeholder="Search country here..."
      @input="searchInput"
    />
    <button class="search-bar__btn">
      <base-icon :svg="icon.search" :size="28"></base-icon>
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mdiMagnify } from "@mdi/js";
import { homeStore } from "@/store";

@Component
export default class SearchBar extends Vue {
  icon: Object = {
    search: mdiMagnify
  };

  searchInput(value: Object) {
    // @ts-ignore
    homeStore.searchCountry(value.target.value);
  }
}
</script>
<style>
</style>