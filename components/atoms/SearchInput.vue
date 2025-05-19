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
  <div class="flex justify-center">
    <input v-model="inputValue" class="rick-input text-left mt-2" type="text"
      placeholder="Search for a Morty... or someone else" @input="onInput" />
  </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');

@media (max-width: 510px) {
.rick-input {
  width: 320px!important;
}
}

.rick-input {
  width: 30rem;
  padding: 0.75rem 1rem;
  border: 2px solid #00ffea;
  border-radius: 0.75rem;
  background-color: #121212;
  color: #7eff6c;
  font-size: 1rem;
  font-family: 'Share Tech Mono', monospace;
  box-shadow: inset 0 0 10px #00ffea;
  outline: none;
  transition: box-shadow 0.3s ease, transform 0.2s ease;
}

.rick-input::placeholder {
  color: #4afff2;
  font-style: italic;
}

.rick-input:hover {
  box-shadow: 0 0 10px #00ffea, 0 0 20px #7eff6c;
  transform: scale(1.02);
}

.rick-input:focus {
  box-shadow: 0 0 15px #00ffea, inset 0 0 15px #7eff6c;
  transform: scale(1.05);
}
</style>