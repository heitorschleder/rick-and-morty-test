<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import SearchInput from '@/components/atoms/SearchInput.vue'
import CharacterList from '@/components/organisms/CharacterList.vue'
import PaginationControls from '@/components/molecules/PaginationControls.vue'
import PageBackground from '@/components/atoms/PageBackground.vue'

import { useCharacters } from '@/composables/useCharacters'

const router = useRouter()
const searchQuery = ref('')

const {
  characters,
  page,
  hasNextPage,
  changePage,
  fetchCharacters
} = useCharacters(searchQuery)

const handleSearch = () => {
  page.value = 1
  fetchCharacters()
}

const navigateToCharacter = (id: string) => {
  router.push(`/character/${id}`)
}
</script>

<template>
  <PageBackground backgroundImage="/images/space.jpg">
    <div class="min-h-screen">
      <nav class="flex justify-center pt-4">
        <NuxtLink to="/" class="text-2xl font-bold text-gray-800">
          <img class="h-32" src="../src/images/logo.png" alt="Logo Rick and Morty" />
        </NuxtLink>
      </nav>
      <div class="container mx-auto p-4">
        <div class="mb-6">
          <SearchInput v-model="searchQuery" @search="handleSearch" />
        </div>
        <CharacterList :characters="characters" @characterClick="navigateToCharacter" />
        <PaginationControls :page="page" :hasNextPage="hasNextPage" @changePage="changePage" />
      </div>
    </div>
  </PageBackground>
</template>