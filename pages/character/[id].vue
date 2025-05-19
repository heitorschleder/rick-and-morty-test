<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gql from 'graphql-tag'
import { useRoute } from 'vue-router'

import CharacterDetails from '@/components/molecules/CharacterDetails.vue'
import EpisodeCard from '@/components/molecules/EpisodeCard.vue'

const route = useRoute()

interface Character {
  id: string
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: { name: string }
  location: { name: string }
  image: string
  episode: {
    id: string
    name: string
    air_date: string
    episode: string
  }[]
}

const character = ref<Character | null>(null)

const CHARACTER_QUERY = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      origin { name }
      location { name }
      image
      episode {
        id
        name
        air_date
        episode
      }
    }
  }
`

const fetchCharacter = async () => {
  try {
    const { data } = await fetch('https://rickandmortyapi.com/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: CHARACTER_QUERY.loc?.source.body,
        variables: { id: route.params.id },
      }),
    }).then(res => res.json())

    character.value = data.character
  } catch (error) {
    console.error('Error fetching character:', error)
  }
}

onMounted(fetchCharacter)
</script>

<template>
  <div class="min-h-screen bg-fixed bg-center bg-cover" style="background-image: url('/images/space.jpg')">
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
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap');

.font-cartoon {
  font-family: 'Rubik Mono One', sans-serif;
}
</style>