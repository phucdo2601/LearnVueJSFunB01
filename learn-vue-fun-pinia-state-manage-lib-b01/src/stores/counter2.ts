import { defineStore } from "pinia";

export const useCounterStore02 = defineStore("counte2", {
  state: () => ({
    count: 0,
  }),

  getters: {
    double: (state) => state.count * 2,
  },

  actions: {
    increment() {
      this.count++;
    },
  },
});
