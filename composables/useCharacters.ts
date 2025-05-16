import { ref, watch, onMounted } from 'vue'
import gql from 'graphql-tag'

interface Character {
  id: string
  name: string
  species: string
  image: string
}

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
      const response = await fetch('https://rickandmortyapi.com/graphql', {
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
      })

      const { data, errors } = await response.json()

      if (errors) {
        throw new Error(errors[0]?.message || 'Erro desconhecido na API')
      }

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