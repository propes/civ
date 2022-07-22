<script setup lang="ts">
import type { Tile } from "@/domain/tile";
import type { City } from "@/domain/cities/city";
import TileComponent from "./TileComponent.vue";
import CityComponent from "./CityComponent.vue";

const props = defineProps<{
  tiles: Tile[];
  cities: City[];
}>();
</script>

<template>
  <div class="board">
    <template v-for="tile in props.tiles" :key="tile.location">
      <TileComponent :type="tile.type" :location="tile.location" />
    </template>
    <template v-for="city in props.cities" :key="city.id">
      <CityComponent :city="city" />
    </template>
  </div>
</template>

<style scoped>
.board {
  position: relative;
}
</style>
