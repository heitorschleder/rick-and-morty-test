<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gql from 'graphql-tag'

const route = useRoute()

interface Character {
  id: string
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: {
    name: string
  }
  location: {
    name: string
  }
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
      origin {
        name
      }
      location {
        name
      }
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
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: CHARACTER_QUERY.loc?.source.body,
                variables: {
                    id: route.params.id,
                },
            }),
        }).then(res => res.json())

        character.value = data.character
    } catch (error) {
        console.error('Error fetching character:', error)
    }
}

onMounted(() => {
    fetchCharacter()
})
</script>

<template>
    <div class="min-h-screen bg-fixed bg-center bg-cover"
    style="background-image: url('/images/space.jpg')">
        <nav class="flex justify-center">
            <NuxtLink to="/"><img class="h-32" src="@/src/images/logo.png" alt="Logo Rick and Morty"></NuxtLink>
        </nav>
        <div class="container mx-auto p-4">
            <div v-if="character" class="bg-white rounded-lg shadow-md overflow-hidden">
                <div class="md:flex">
                    <img :src="character.image" :alt="character.name"
                        class="w-full md:w-1/3 h-64 md:h-auto object-cover" />
                    <div class="p-6">
                        <h1 class="text-3xl font-bold mb-4">{{ character.name }}</h1>
                        <div class="space-y-2">
                            <p><span class="font-semibold">Status:</span> {{ character.status }}</p>
                            <p><span class="font-semibold">Species:</span> {{ character.species }}</p>
                            <p><span class="font-semibold">Gender:</span> {{ character.gender }}</p>
                            <p><span class="font-semibold">Origin:</span> {{ character.origin.name }}</p>
                            <p><span class="font-semibold">Location:</span> {{ character.location.name }}</p>
                        </div>
                    </div>
                </div>

                <div class="p-6 border-t">
                    <h2 class="text-2xl font-bold mb-4">Episodes</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div v-for="episode in character.episode" :key="episode.id" class="p-4 bg-gray-50 rounded-lg">
                            <h3 class="font-semibold">{{ episode.name }}</h3>
                            <p class="text-gray-600">{{ episode.episode }}</p>
                            <p class="text-sm text-gray-500">Air date: {{ episode.air_date }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>