import { ref } from 'vue'
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
  const winner = ref({ name: '', text: '' })

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

    winningId.forEach((element) => {
      const [x, y, z] = element
      if (
        gameBtns.value[x].name === gameBtns.value[y].name &&
        gameBtns.value[x].name === gameBtns.value[z].name &&
        gameBtns.value[x].name !== ''
      ) {
        winner.value.name = gameBtns.value[x].name
        if (winner.value.name === 'X') {
          winner.value.text = 'The winner is player ❌'
        } else if (winner.value.name === 'O') {
          winner.value.text = 'The winner is player ⭕'
        }
      }
    })
    if (gameBtns.value.every((element) => element.name !== '') && winner.value.name === '') {
      winner.value.text = 'There is no winner'
    }
  }

  const reset = () => {
    gameBtns.value.forEach((btn) => {
      btn.name = ''
      winner.value.name = ''
      winner.value.text = ''
    })

    activePlayer.value = 'O'
  }

  return {
    gameBtns,
    activePlayer,
    winner,
    checkWinner,
    reset,
    makeMove
  }
})
