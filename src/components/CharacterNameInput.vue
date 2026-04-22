<script setup>
import { useCharacterStore } from '../stores/character'

const character = useCharacterStore()
</script>

<template>
  <div class="flex flex-col items-center gap-2">
    <input
      type="text"
      placeholder="Enter Character Name"
      class="rounded border-2 border-gray-400 p-4 px-3 py-2 text-white"
      @input="character.setName($event.target.value)"
    />

    <p class="font-bold">Name: {{ character.currentCharacter.name }}</p>
  </div>
</template>
