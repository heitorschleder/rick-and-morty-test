export async function fetchGraphQL(query: string, variables?: Record<string, any>) {
  const response = await fetch('https://rickandmortyapi.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  })

  const { data, errors } = await response.json()

  if (errors) {
    throw new Error(errors[0]?.message || 'Erro desconhecido na API')
  }

  return data
}