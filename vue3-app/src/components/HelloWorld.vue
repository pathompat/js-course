<script setup>
  import { ref, computed, watch, defineProps } from 'vue'

  const props = defineProps({
    firstName: String,
    lastName: String
  })
  const count = ref(0)
  const items = ref(['Item 1', 'Item 2', 'Item 3'])

  const fullName = computed(() => {
    return `${props.firstName} ${props.lastName}`
  })

  const incremental = () => {
    count.value++
  }

  watch(count, (newVal, oldVal) => {
    console.log(`คลิกเปลี่ยนจาก ${oldVal} เป็น ${newVal}`)
  })
</script>

<template>
  <div>
    <h2>Hello, {{ fullName }}!</h2>
    <p>Clicked: {{ count }}</p>
    <ul>
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>
    <button @click="incremental">Click</button>
  </div>
</template>