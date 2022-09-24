import { gql } from 'graphql-request'

export const GET_CHARACTERS = gql`
  query GET_CHARACTERS {
    characters {
      results {
        id
        name
        gender
        image
      }
    }
  }
`
