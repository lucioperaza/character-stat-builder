<script setup>
import { useCharacterStore } from '../stores/character'

const character = useCharacterStore()

const stats = ['strength', 'agility', 'intelligence']
</script>

<template>
  <div class="flex gap-6">
    <div
      v-for="stat in stats"
      :key="stat"
      class="text-center"
    >
      <p class="capitalize">{{ stat }}: {{ character[stat] }}</p>

      <div class="mt-2 flex justify-center gap-2">
        <button
          class="rounded bg-green-500 px-3"
          @click="character.increaseStat(stat)"
        >
          +
        </button>

        <button
          class="rounded bg-red-500 px-3"
          @click="character.decreaseStat(stat)"
        >
          -
        </button>
      </div>
    </div>
  </div>
</template>
