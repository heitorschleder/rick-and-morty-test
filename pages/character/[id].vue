<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'

import PageBackground from '@/components/atoms/PageBackground.vue'
import CharacterDetails from '@/components/molecules/CharacterDetails.vue'
import EpisodeCard from '@/components/molecules/EpisodeCard.vue'

import { useCharacterById } from '@/composables/useCharacterById'

const route = useRoute()
const {
  character,
  error,
  fetchCharacter
} = useCharacterById(route.params.id as string)

onMounted(async () => {
  await fetchCharacter()
  if (!character.value) {
    console.error('Erro ao buscar personagem:', error.value)
  }
})
</script>

<template>
  <PageBackground backgroundImage="/images/space.jpg">
    <nav class="flex justify-center py-6">
      <NuxtLink to="/">
        <img class="h-32 hover:scale-110 transition-transform duration-300" src="@/src/images/logo.png" alt="Logo Rick and Morty" />
      </NuxtLink>
    </nav>

    <div class="container mx-auto p-4">
      <div v-if="character" class="bg-[#0b0f1a]/80 backdrop-blur-md border-4 border-green-400 rounded-3xl shadow-xl text-white">
        <CharacterDetails :character="character" />

        <div class="p-6 border-t-4 border-green-400">
          <h2 class="text-3xl font-cartoon mb-4 text-yellow-300">🎬 Episodes</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <EpisodeCard v-for="ep in character.episode" :key="ep.id" :episode="ep" />
          </div>
        </div>
      </div>
    </div>
  </PageBackground>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap');

.font-cartoon {
  font-family: 'Rubik Mono One', sans-serif;
}
</style>