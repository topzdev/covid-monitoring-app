<template>
  <div class="map">
    <!-- <img src="@/assets/img/sample-map.jpg" alt="google earth" draggable="false" /> -->
    <div ref="map" v-bind:style="{ width: width, height: height }"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class HomePageMap extends Vue {
  @Prop(String) appId: String | undefined;
  @Prop(String) appCode: String | undefined;
  @Prop(String) lat: String | undefined;
  @Prop(String) lng: String | undefined;
  @Prop(String) width: String | undefined;
  @Prop(String) height: String | undefined;

  map: object = {};
  platform: object = {};

  created() {
    console.log(this.appId, " ", this.appCode);

    // @ts-ignore
    this.platform = new H.service.Platform({
      apikey: this.appCode
    });
  }

  mounted() {
    // @ts-ignore
    this.map = new H.Map(
      this.$refs.map,
      // @ts-ignore
      this.platform.createDefaultLayers().vector.normal.map,
      {
        zoom: 10,
        center: { lng: this.lng, lat: this.lat }
      }
    );
  }
}
</script>

<style>
</style>