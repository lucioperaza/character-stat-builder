import { defineStore } from 'pinia'

export const useCharacterStore = defineStore('character', {
  state: () => ({
    characters: [],
    currentCharacter: {
      id: null,
      name: '',
      strength: 5,
      agility: 5,
      intelligence: 5,
      points: 10,
    },
  }),

  getters: {
    totalStats: (state) => {
      const c = state.currentCharacter
      return c.strength + c.agility + c.intelligence
    },
    isPointsRemaining: (state) => {
      return state.currentCharacter.points > 0
    },
  },

  actions: {
    setName(newName) {
      this.currentCharacter.name = newName
    },

    increaseStat(stat) {
      if (this.currentCharacter.points > 0) {
        this.currentCharacter[stat]++
        this.currentCharacter.points--
      }
    },

    decreaseStat(stat) {
      if (this.currentCharacter[stat] > 0) {
        this.currentCharacter[stat]--
        this.currentCharacter.points++
      }
    },

    saveCharacter() {
      if (!this.currentCharacter.name) return

      const newCharacter = {
        ...this.currentCharacter,
        id: Date.now(),
      }

      this.characters.push(newCharacter)
      this.resetCharacter()
    },

    selectCharacter(character) {
      const totalUsed = character.strength + character.agility + character.intelligence

      const maxPoints = 25

      this.currentCharacter = {
        ...character,
        points: maxPoints - totalUsed,
      }
    },

    deleteCharacter(id) {
      this.characters = this.characters.filter((c) => c.id !== id)
    },

    resetCharacter() {
      this.currentCharacter = {
        id: null,
        name: '',
        strength: 5,
        agility: 5,
        intelligence: 5,
        points: 10,
      }
    },
  },
})
