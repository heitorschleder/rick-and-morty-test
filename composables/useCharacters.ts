import { ref, watch } from 'vue'
import { GET_CHARACTERS } from '@/graphql/queries'
import { fetchGraphQL } from '@/utils/fetchGraphQL'

interface Character {
  id: string
  name: string
  species: string
  image: string
}

export function useCharacters(searchQuery = ref('')) {
  const characters = ref<Character[]>([])
  const page = ref(1)
  const hasNextPage = ref(true)
  const loading = ref(false)
  const error = ref<null | string>(null)

  const fetchCharacters = async () => {
    loading.value = true
    error.value = null

    try {
      const data = await fetchGraphQL(GET_CHARACTERS, {
        page: page.value,
        name: searchQuery.value || undefined,
      })

      characters.value = data.characters.results
      hasNextPage.value = !!data.characters.info.next
    } catch (err: any) {
      error.value = err.message
      characters.value = []
      hasNextPage.value = false
    } finally {
      loading.value = false
    }
  }

  const changePage = (newPage: number) => {
    page.value = newPage
  }

  watch([page, searchQuery], fetchCharacters, { immediate: true })

  return {
    characters,
    page,
    hasNextPage,
    loading,
    error,
    changePage,
    fetchCharacters,
  }
}