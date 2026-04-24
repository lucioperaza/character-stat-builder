<script setup>
import CharacterNameInput from './components/CharacterNameInput.vue'
import StatControls from './components/StatControls.vue'
import CharacterSummary from './components/CharacterSummary.vue'
import CharacterList from './components/CharacterList.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-700 p-6 text-white sm:p-6">
    <h1 class="mb-6 text-center text-3xl font-bold text-amber-400 sm:text-4xl">
      Character Stat Builder
    </h1>
    <div class="mx-auto flex max-w-5xl flex-col gap-6 md:flex-row">
      <div class="flex w-full flex-col gap-6 md:w-2/3">
        <CharacterNameInput />
        <StatControls class="justify-center" />
        <CharacterSummary />
      </div>
      <div class="w-full md:w-1/3">
        <CharacterList />
      </div>
    </div>

    <div></div>
  </div>
</template>
