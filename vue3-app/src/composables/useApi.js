import { ref } from 'vue'
import axios from 'axios'

export function useApi(url) {
  const data = ref(null)
  const loading = ref(true)
  const error = ref(null)

  const fetchData = async () => {
    loading.value = true
    try {
      const res = await axios.get(url)
      data.value = res.data
    } catch (e) {
      error.value = e
    } finally {
      loading.value = false
    }
  }

  fetchData()

  return { data, loading, error, refetch: fetchData }
}