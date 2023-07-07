<template>
  <div
    class="bg-background-gray h-screen bg-gradient-to-bl from-sky-400 via-pink-500 to-yellow-200"
  >
    <div class="font-outline-2 flex justify-center font-audiowide text-9xl text-transparent">
      tic-tac-toe
    </div>
    <div
      class="font-outline-2-pink flex justify-center py-4 font-audiowide text-6xl text-yellow-300"
    >
      player: {{ store.activePlayer }}
    </div>

    <div class="flex justify-center py-4">
      <div class="grid grid-cols-3 justify-center gap-5">
        <div v-for="btn in store.gameBtns" :key="btn.id" :title="btn.name">
          <GameButton :data="btn" @btnClick="btnClick" />
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <div
        v-show="store.winner"
        class="font-outline-2 from-bg-black absolute top-[3px] mt-80 flex h-96 w-1/3 justify-center p-8 font-audiowide text-9xl text-sky-700 backdrop-blur-xl"
      >
        {{ store.result }}
      </div>
    </div>
    <div class="flex justify-center py-4">
      <button
        @click="store.reset"
        class="text-align-center h-24 w-1/6 rounded-[50px] bg-yellow-200 font-audiowide text-5xl text-pink-800 opacity-70 shadow-2xl shadow-cyan-800/50 hover:bg-sky-400"
      >
        reset
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import GameButton from '@/components/GameButton.vue'

const store = useCounterStore()

const btnClick = (id: number) => {
  store.makeMove(id)
}
</script>
