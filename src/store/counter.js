// src/stores/counter.ts
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 5,
  }),
  actions: {
    increment() {
      this.count++;
      console.log(this.count);
    },
  },
});
