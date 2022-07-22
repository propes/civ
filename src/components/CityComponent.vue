<script setup lang="ts">
import type { City } from "@/domain/cities/city";
import { computed } from "vue";
import imgUrl from "../assets/images/cities/stone2.gif";

const height = 32;
const width = 64;
const topOffset = 16;

const props = defineProps<{
  city: City;
}>();

const top = computed(() => (props.city.location[0] * height) / 2 - topOffset);

const left = computed(() => {
  if (props.city.location[0] % 2 === 0) {
    return (props.city.location[1] * width) / 2;
  }

  return (props.city.location[1] * width) / 2;
});

function selectCity() {
  alert(`${props.city.name} selected`);
}
</script>

<template>
  <div
    class="city"
    :style="{
      height: `${height}px`,
      width: `${width}px`,
      top: `${top}px`,
      left: `${left}px`,
    }"
  >
    <div class="city-container">
      <img class="city-icon" :src="imgUrl" @click="selectCity" />
      <div class="city-title">{{ props.city.name }}</div>
      <div class="city-pop-badge">{{ props.city.population }}</div>
    </div>
  </div>
</template>

<style scoped>
.city {
  position: absolute;
}

.city-icon {
  cursor: pointer;
}

.city-title {
  position: absolute;
  text-align: center;
  width: 100px;
  top: 40px;
  left: -18px;
  text-shadow: 1px 1px #000;
  font-family: serif;
  color: #fff;
  cursor: default;
}

.city-pop-badge {
  position: absolute;
  background-color: #fff;
  border: 1px inset #555;
  text-align: center;
  top: 32px;
  left: 10px;
  height: 12px;
  width: 8px;
  font-family: sans-serif;
  font-size: 6pt;
  font-weight: 900;
  color: #000;
  cursor: default;
}
</style>
