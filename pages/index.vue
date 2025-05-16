<script setup lang="ts">
import { ref, watch } from 'vue'
import gql from 'graphql-tag'

const router = useRouter()
const searchQuery = ref('')
const page = ref(1)
const hasNextPage = ref(true)

interface Character {
  id: string
  name: string
  species: string
  image: string
}

const characters = ref<Character[]>([])

const CHARACTERS_QUERY = gql`
  query GetCharacters($page: Int!, $name: String) {
    characters(page: $page, filter: { name: $name }) {
      info {
        next
        prev
      }
      results {
        id
        name
        species
        image
      }
    }
  }
`

const fetchCharacters = async () => {
  try {
    const { data } = await fetch('https://rickandmortyapi.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: CHARACTERS_QUERY.loc?.source.body,
        variables: {
          page: page.value,
          name: searchQuery.value || undefined,
        },
      }),
    }).then(res => res.json())

    characters.value = data.characters.results
    hasNextPage.value = !!data.characters.info.next
  } catch (error) {
    console.error('Error fetching characters:', error)
  }
}

const handleSearch = () => {
  page.value = 1
  fetchCharacters()
}

const changePage = (newPage: number) => {
  page.value = newPage
  fetchCharacters()
}

const navigateToCharacter = (id: string) => {
  router.push(`/character/${id}`)
}

watch(page, fetchCharacters)

onMounted(() => {
  fetchCharacters()
})
</script>

<template>
 <div
    class="min-h-screen bg-fixed bg-center bg-cover"
    style="background-image: url('https://img.freepik.com/fotos-gratis/as-belas-estrelas-brilhando-no-ceu-noturno_181624-622.jpg')"
  >
  
    <div class="backdrop-blur-sm min-h-screen">
      <nav class="flex justify-center pt-4">
      <NuxtLink to="/" class="text-2xl font-bold text-gray-800"><img src="../src/images/logo.png" alt="Logo Rick and Morty"></NuxtLink>
    </nav>
      <div class="container mx-auto p-4">
        <div class="mb-6">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search characters..."
            class="w-full p-2 border border-green rounded-lg"
            @input="handleSearch"
          />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            v-for="character in characters"
            :key="character.id"
            class="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
            @click="navigateToCharacter(character.id)"
          >
            <img :src="character.image" :alt="character.name" class="w-full h-48 object-cover" />
            <div class="p-4">
              <h2 class="text-xl font-semibold">{{ character.name }}</h2>
              <p class="text-gray-600">{{ character.species }}</p>
            </div>
          </div>
        </div>

        <div class="mt-6 flex justify-center gap-4">
          <button
            v-if="page > 1"
            @click="changePage(page - 1)"
            class="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Previous
          </button>
          <button
            v-if="hasNextPage"
            @click="changePage(page + 1)"
            class="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>