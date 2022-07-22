<script setup lang="ts">
import { reactive } from "vue";
import GameViewer from "./components/GameViewer.vue";
import SideBar from "./components/SideBar.vue";
import { Game } from "./domain/game";

const game = reactive(new Game());
</script>

<template>
  <div class="container">
    <div class="main">
      <div class="main-header"></div>
      <div class="main-viewer">
        <GameViewer :tiles="game.tiles" :cities="game.cities" />
      </div>
    </div>
    <div class="sidebar">
      <SideBar :game="game" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 100px;
  grid-template-areas: "main sidebar";
}

.main {
  grid-column: 1;
  display: grid;
  grid-template-rows: min-content 1fr;
}

.main-header {
  grid-row: 1;
  justify-self: center;
}

.main-viewer {
  grid-row: 2;
}

.sidebar {
  grid-column: 2;
  align-self: end;
}
</style>
