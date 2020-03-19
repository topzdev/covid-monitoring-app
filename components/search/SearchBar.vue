<template>
  <div class="search-bar">
    <input type="text" class="inp inp--search" placeholder="Search country here..." />
    <button class="search-bar__btn">
      <base-icon :svg="icon.search" :size="28"></base-icon>
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mdiMagnify } from "@mdi/js";

@Component
export default class SearchBar extends Vue {
  icon: Object = {
    search: mdiMagnify
  };
}
</script>
<style>
</style>