<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits(['update:modelValue', 'search'])

const inputValue = ref(props.modelValue)

watch(() => props.modelValue, newValue => {
  inputValue.value = newValue
})

const onInput = () => {
  emit('update:modelValue', inputValue.value)
  emit('search')
}
</script>

<template>
  <input
    v-model="inputValue"
    type="text"
    placeholder="Search characters..."
    class="w-full p-2 border border-green rounded-lg"
    @input="onInput"
  />
</template>