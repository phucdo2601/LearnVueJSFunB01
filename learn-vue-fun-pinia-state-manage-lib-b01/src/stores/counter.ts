import { ref, computed } from "vue";
import { acceptHMRUpdate, defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(1);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  const decrement = () => {
    count.value -= 2;
  };

  return { count, doubleCount, increment, decrement };
});

// This code snippet is used to enable Hot Module Replacement (HMR) for the Pinia Store in the development environment.
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot));
}
