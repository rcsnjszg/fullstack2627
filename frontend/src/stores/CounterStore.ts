import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCounter = defineStore('counter', () => {
  const counter = ref<number>(0)

  function increment(step: number = 1): void {
    counter.value += step
  }

  const counter10X = computed(() => counter.value * 10)

  return { counter, increment, counter10X }
})
