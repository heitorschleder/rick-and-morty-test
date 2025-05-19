<script setup lang="ts">
defineProps<{
  character: {
    name: string
    image: string
    status: string
    species: string
    gender: string
    origin: { name: string }
    location: { name: string }
  }
}>()
</script>

<template>
  <div class="md:flex p-6">
    <img :src="character.image" :alt="character.name"
      class="w-full md:w-1/3 h-64 md:h-auto object-cover rounded-2xl border-4 border-green-500 shadow-lg" />
    <div class="md:ml-8 mt-6 md:mt-0">
      <h1 class="text-4xl md:text-5xl font-cartoon mb-4 text-green-400">{{ character.name }}</h1>
      <div class="space-y-2 text-lg">
        <p><span class="font-bold text-green-300">Status:</span> {{ character.status }}</p>
        <p><span class="font-bold text-green-300">Species:</span> {{ character.species }}</p>
        <p><span class="font-bold text-green-300">Gender:</span> {{ character.gender }}</p>
        <p><span class="font-bold text-green-300">Origin:</span> {{ character.origin.name }}</p>
        <p><span class="font-bold text-green-300">Location:</span> {{ character.location.name }}</p>
      </div>
    </div>
  </div>
</template>