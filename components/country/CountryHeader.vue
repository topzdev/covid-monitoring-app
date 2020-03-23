<template>
  <div class="country__headers">
    <h1 class="heading--primary" v-text="title" />

    <search-bar class="ml-auto"></search-bar>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import SearchBar from "@/components/search/SearchBar.vue";
@Component({
  components: { SearchBar }
})
export default class CountryHeader extends Vue {
  @Prop(String) title: String | undefined;
}
</script>


<style>
</style>