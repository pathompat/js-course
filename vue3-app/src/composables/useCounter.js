import { ref } from 'vue'

const count = ref(0)

const increment = () => {
  count.value++
}

export function useCounter() {
  return {
    count,
    increment
  }
}