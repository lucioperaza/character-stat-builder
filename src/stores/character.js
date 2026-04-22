import { defineStore } from 'pinia'

export const useCharacterStore = defineStore('character', {
  state: () => ({
    name: '',
    strength: 5,
    agility: 5,
    intelligence: 5,
    points: 10,
  }),

  getters: {
    totalStats: (state) => state.strength + state.agility + state.intelligence,

    isPointsRemaining: (state) => state.points > 0,
  },

  actions: {
    setName(newName) {
      this.name = newName
    },

    increaseStat(stat) {
      if (this.points > 0) {
        this[stat]++
        this.points--
      }
    },

    decreaseStat(stat) {
      if (this[stat] > 0) {
        this[stat]--
        this.points++
      }
    },

    resetCharacter() {
      this.name = ''
      this.strength = 5
      this.agility = 5
      this.intelligence = 5
      this.points = 10
    },
  },
})
