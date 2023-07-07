<template>
  <div>
    <button
      :disabled="disabledBtn()"
      @click="handleClick()"
      :class="[
        props.data.name
          ? 'text-align-center relative h-52 w-52 rounded-[15px] bg-pink-300 font-audiowide text-9xl text-sky-600 opacity-80 shadow-2xl shadow-cyan-800/50 hover:bg-pink-400'
          : 'text-align-center relative h-52 w-52 rounded-[15px] bg-sky-300 font-audiowide text-9xl text-pink-600 opacity-80 shadow-2xl shadow-cyan-800/50 hover:bg-sky-400'
      ]"
    >
      {{ props.data.name }}
    </button>
  </div>
</template>
<script setup lang="ts">
import type { PropType } from 'vue'
import type { IBtnData } from '@/interfaces'
import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()
const props = defineProps({
  data: {
    type: Object as PropType<IBtnData>,
    required: true
  }
})

const emits = defineEmits<{
  btnClick: [id: number]
}>()

const handleClick = () => {
  emits('btnClick', props.data.id)
}
const disabledBtn = () => {
  if (store.winner === 'X') {
    return true
  } else if (store.winner === 'O') {
    return true
  } else if (props.data.name !== '') {
    return true
  }
}
</script>
