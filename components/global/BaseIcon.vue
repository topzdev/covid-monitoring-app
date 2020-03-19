<template>
  <span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      :height="`${size}px`"
      :width="`${size}px`"
      role="img"
      aria-hidden="true"
    >
      <path :d="svg" />
    </svg>
  </span>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class BaseIcon extends Vue {
  @Prop({ default: 24 }) size: Number | undefined;
  @Prop(String) svg: String | undefined;
}
</script>

<style>
</style>