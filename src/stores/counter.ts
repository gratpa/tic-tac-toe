import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const gameBtns = ref([
    { id: 0, name: '' },
    { id: 1, name: '' },
    { id: 2, name: '' },
    { id: 3, name: '' },
    { id: 4, name: '' },
    { id: 5, name: '' },
    { id: 6, name: '' },
    { id: 7, name: '' },
    { id: 8, name: '' }
  ])

  const activePlayer = ref('O')

  const makeMove = (id: number) => {
    gameBtns.value[id].name = activePlayer.value
    activePlayer.value === 'X' ? (activePlayer.value = 'O') : (activePlayer.value = 'X')
  }
  const checkWinner = () => {
    const winningId = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2]
    ]
    for (let i = 0; i < winningId.length; i++) {
      const [x, y, z] = winningId[i]

      if (
        gameBtns.value[x].name === gameBtns.value[y].name &&
        gameBtns.value[x].name === gameBtns.value[z].name &&
        gameBtns.value[x].name !== ''
      ) {
        return gameBtns.value[x].name
      }
    }
  }

  const reset = () => {
    gameBtns.value.forEach((btn) => {
      btn.name = ''
    })

    activePlayer.value = 'O'
  }
  const dispWinner = () => {
    if (winner.value === 'X') {
      return 'The winner is player ❌'
    } else if (winner.value === 'O') {
      return 'The winner is player ⭕'
    }
  }

  const winner = computed(() => checkWinner())
  const result = computed(() => dispWinner())

  return {
    gameBtns,
    activePlayer,
    winner,
    result,
    reset,
    makeMove
  }
})
