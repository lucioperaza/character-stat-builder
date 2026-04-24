<script setup>
import { useCharacterStore } from '../stores/character'

const character = useCharacterStore()
</script>

<template>
  <div class="max-h-75 w-full overflow-y-auto rounded bg-gray-800 p-4 md:max-h-125">
    <h2 class="mb-3 text-lg font-bold">Saved Characters</h2>

    <div v-if="character.characters.length === 0">
      <p>No characters saved</p>
    </div>
    <div
      v-for="c in character.characters"
      :key="c.id"
      class="mb-2 flex items-center justify-between rounded bg-gray-700 p-2"
    >
      <div>
        <p class="font-semibold">{{ c.name }}</p>
        <p class="m-1 text-sm">Strength: {{ c.strength }}</p>
        <p class="m-1 text-sm">Agility: {{ c.agility }}</p>
        <p class="m-1 text-sm">Intelligence: {{ c.intelligence }}</p>
        <p class="m-1 text-sm">
          Total: {{ (c.strength || 0) + (c.agility || 0) + (c.intelligence || 0) }}
        </p>
        <p class="m-1 text-sm">Points Remaining: {{ c.points }}</p>
      </div>

      <div class="flex gap-2">
        <button
          class="rounded bg-green-500 px-2"
          @click="character.selectCharacter(c)"
        >
          Edit
        </button>

        <button
          class="rounded bg-red-500 px-2"
          @click="character.deleteCharacter(c.id)"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>
