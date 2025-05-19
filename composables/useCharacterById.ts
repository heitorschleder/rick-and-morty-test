import { ref, onMounted, type Ref } from 'vue'
import { useRoute } from 'vue-router'
import { fetchGraphQL } from '@/utils/fetchGraphQL'
import { GET_CHARACTER_BY_ID } from '@/graphql/queries'


interface Episode {
  id: string
  name: string
  air_date: string
  episode: string
}

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
  episode: Episode[]
}

export function useCharacterById(): {
  character: Ref<Character | null>
  loading: Ref<boolean>
  error: Ref<string | null>
  fetchCharacter: () => Promise<void>
} {
  const character = ref<Character | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  const route = useRoute()

  const fetchCharacter = async () => {
    loading.value = true
    error.value = null

    try {
      const data = await fetchGraphQL(GET_CHARACTER_BY_ID, { id: route.params.id })
      character.value = data.character
    } catch (err: any) {
      error.value = err.message || 'Erro desconhecido ao buscar personagem.'
    } finally {
      loading.value = false
    }
  }

  onMounted(fetchCharacter)

  return {
    character,
    loading,
    error,
    fetchCharacter
  }
}