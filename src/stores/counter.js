import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useCounterStore = defineStore('counter', () => {
  const score = useStorage('score', 0)

  return { score }
})
