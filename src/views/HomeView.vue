<template>
  <v-container fluid>
    <v-img :src="logo" width="125" height="125"></v-img>

    <v-btn class="mt-2" prepend-icon="mdi-plus" color="blue" @click="addCount()">Add</v-btn>
    <h1>Count: {{ obj.count }}</h1>

    <v-btn class="mt-10" prepend-icon="mdi-plus" color="red" @click="addScore()">Add</v-btn>
    <h1>Score: {{ store.score }}</h1>
  </v-container>
</template>

<script setup>
import logo from '@/assets/logo.svg'
import { useStorage } from '@vueuse/core'
import { useCounterStore } from '@/stores/counter'

const obj = useStorage('store', { count: 0 })

function addCount() {
  obj.value.count++
}

const store = useCounterStore()

function addScore() {
  store.score++
}
</script>
