<script setup>
import { inject } from 'vue'
import Counter3 from './counter3.vue';

const counterStore = inject('counterStore')
</script>

<template>
  <div>
    <h1>this is counter2</h1>

    this is the val of counter2 : {{ counterStore.count }}

    <Counter3 />
  </div>
</template>