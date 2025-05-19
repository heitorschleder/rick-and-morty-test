<script setup lang="ts">
defineProps<{
  episode: {
    id: string
    name: string
    episode: string
    air_date: string
  }
}>()
</script>

<template>
  <div class="p-4 bg-[#1c2331] border-2 border-purple-400 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
    <h3 class="text-xl font-semibold text-purple-300">{{ episode.name }}</h3>
    <p class="text-white">{{ episode.episode }}</p>
    <p class="text-sm text-gray-400">🗓️ {{ episode.air_date }}</p>
  </div>
</template>