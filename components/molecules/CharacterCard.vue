<script setup lang="ts">
defineProps<{
  character: {
    id: string
    name: string
    species: string
    image: string
  }
}>()
defineEmits(['click'])
</script>

<template>
  <div
    class="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
    @click="$emit('click', character.id)"
  >
    <img :src="character.image" :alt="character.name" class="w-full h-48 object-cover" />
    <div class="p-4">
      <h2 class="text-xl font-semibold">{{ character.name }}</h2>
      <p class="text-gray-600">{{ character.species }}</p>
    </div>
  </div>
</template>