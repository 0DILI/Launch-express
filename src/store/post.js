// src/stores/counter.ts
import { defineStore } from 'pinia';
import { ref, reactive } from 'vue';


const stateIni = {
  content: 'Feeling the mystery of the day with a touch of the undefined love 🔮! Embrace the unknown, for its where true adventure begins!',
  image: 'src/assets/fox-img.png',
  tags: []
}

export const usePostStore = defineStore('post', () => {


  let count = ref(5);


  const state = reactive({
    ...stateIni
  })
  function increment() {
    count.value++;
  }

  return { count, increment, state }
});



