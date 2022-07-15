<script setup lang="ts">
import { Game } from "@/domain/game";
import { reactive } from "vue";

const game = reactive(new Game());

function endTurn() {
  game.nextTurn();
}
</script>

<template>
  <div class="viewer">
    <h1>Welcome to this civ game</h1>
    <div class="board">
      <div class="tile"></div>
    </div>
    <div>Turn: {{ game.turn }}</div>
    <button @click="endTurn">End Turn</button>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

.viewer h1 {
  text-align: center;
}

.board .tile {
  height: 50px;
  width: 50px;
  border: solid 1px white;
}
</style>
