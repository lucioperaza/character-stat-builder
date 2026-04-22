<script setup>
import CharacterNameInput from './components/CharacterNameInput.vue'
import StatControls from './components/StatControls.vue'
import CharacterSummary from './components/CharacterSummary.vue'
import CharacterList from './components/CharacterList.vue'
</script>

<template>
  <div class="flex min-h-screen flex-col items-center justify-center gap-4 bg-gray-700 text-white">
    <h1 class="p-4 text-3xl font-bold">Character Builder</h1>

    <CharacterNameInput />
    <StatControls />
    <CharacterSummary />
    <div>
      <CharacterList />
    </div>
  </div>
</template>
