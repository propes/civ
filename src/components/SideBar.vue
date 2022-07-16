<script setup lang="ts">
import { Game } from "@/domain/game";

const props = defineProps({
  game: { type: Game, required: true },
});

function endTurn() {
  props.game.nextTurn();
}
</script>

<template>
  <div>
    <div>Turn: {{ props.game.turn }}</div>
    <button @click="endTurn">End Turn</button>
  </div>
</template>

<style scoped></style>
