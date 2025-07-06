import { ref, watch } from 'vue';

export function useUser() {
  const username = ref(localStorage.getItem('username') || '');

  watch(username, (newVal) => {
    localStorage.setItem('username', newVal);
  });

  return username;
}