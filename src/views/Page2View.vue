<template>
  <v-container fluid>
    <img alt="Vue logo" src="@/assets/logo.svg" width="125" height="125" />

    <h1>Count: {{ obj.count }}</h1>

    <h1 class="mt-10">Score: {{ store.score }}</h1>
  </v-container>
</template>

<script setup>
import { useStorage } from '@vueuse/core'
import { useCounterStore } from '@/stores/counter'

const obj = useStorage('store', { count: 0 })

const store = useCounterStore()
</script>
