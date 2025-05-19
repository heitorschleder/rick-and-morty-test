import gql from 'graphql-tag'

export const GET_CHARACTERS = gql`
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
export const GET_CHARACTER_BY_ID = gql`
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