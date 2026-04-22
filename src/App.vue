<script setup>
import { useCharacterStore } from './stores/character'

const character = useCharacterStore()
</script>

<template>
  <div class="flex min-h-screen flex-col items-center justify-center gap-4 bg-gray-700 text-white">
    <h1 class="p-4 text-3xl font-bold">Character Builder</h1>

    <input
      type="text"
      placeholder="Enter Character Name"
      class="rounded border-2 border-gray-400 p-4 px-3 py-2 text-white"
      @input="character.setName($event.target.value)"
    />

    <p class="font-bold">Name: {{ character.name }}</p>

    <div class="flex gap-6">
      <div>
        <p class="p-4">Strength: {{ character.strength }}</p>
        <button
          class="font-bold"
          @click="character.increaseStat('strength')"
        >
          +
        </button>
        <button
          class="font-bold"
          @click="character.decreaseStat('strength')"
        >
          -
        </button>
      </div>

      <div>
        <p class="p-4">Agility: {{ character.agility }}</p>
        <button
          class="font-bold"
          @click="character.increaseStat('agility')"
        >
          +
        </button>
        <button
          class="font-bold"
          @click="character.decreaseStat('agility')"
        >
          -
        </button>
      </div>

      <div>
        <p class="p-4">Intelligence: {{ character.intelligence }}</p>
        <button
          class="font-bold"
          @click="character.increaseStat('intelligence')"
        >
          +
        </button>
        <button
          class="font-bold"
          @click="character.decreaseStat('intelligence')"
        >
          -
        </button>
      </div>
    </div>

    <p>Points Remaining: {{ character.points }}</p>
    <p>Total Stats: {{ character.totalStats }}</p>

    <button
      class="rounded bg-red-500 px-4 py-2"
      @click="character.resetCharacter"
    >
      Reset
    </button>
  </div>
</template>
