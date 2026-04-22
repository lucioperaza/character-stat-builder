<script setup>
import { useCharacterStore } from '../stores/character'

const character = useCharacterStore()
</script>

<template>
  <div class="mt-4 rounded bg-gray-800 p-5 text-center">
    <p>Points Remaining: {{ character.points }}</p>
    <p>Total Stats: {{ character.totalStats }}</p>

    <button
      class="mt-3 rounded bg-red-500 px-4 py-2"
      @click="character.resetCharacter"
    >
      Reset Character
    </button>
  </div>
</template>
