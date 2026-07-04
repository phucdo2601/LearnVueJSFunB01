<template>
  <div>
    <h1>{{ appName }} - {{ appNameLength }}</h1>

    <div>
      count:  {{ count }} - {{ double }}
    </div>

    <button @click="increment">
      increment
    </button>
  </div>
</template>

<script>
import { useCounterStore02 } from './stores/counter2';
import { mapActions, mapState, mapStores } from 'pinia';

  export default {
    data() {
      return {
        appName: "Learning pinia"
      }
    },
    computed: {
      ...mapStores(useCounterStore02),
      ...mapState(useCounterStore02, ['count', 'double']),
      appNameLength() {
        return this.appName.length;
      }
    },
    methods: {
      ...mapActions(useCounterStore02, ['increment'])
    },
    incrementAgain() {
      this.increment()
    },
    mounted(){
      this.increment()
    }
  }

  
</script>

<style lang="scss" scoped>

</style>