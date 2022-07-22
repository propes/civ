<script setup lang="ts">
import type { TileType } from "@/domain/tile";
import { computed } from "vue";
import grassland1 from "../assets/images/terrain/grassland1.gif";

const imgUrls = {
  grassland1,
};

const height = 32;
const width = 64;

const props = defineProps<{
  type: TileType;
  location: number[];
}>();

const imgSrc = computed(() => imgUrls[props.type]);

const top = computed(() => (props.location[0] * height) / 2);

const left = computed(() => {
  if (props.location[0] % 2 === 0) {
    return (props.location[1] * width) / 2;
  }

  return (props.location[1] * width) / 2;
});
</script>

<template>
  <img
    class="tile"
    :src="imgSrc"
    :style="{
      height: `${height}px`,
      width: `${width}px`,
      top: `${top}px`,
      left: `${left}px`,
    }"
  />
</template>

<style scoped>
.tile {
  position: absolute;
}
</style>
