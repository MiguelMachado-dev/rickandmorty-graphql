import { useQuery } from '@tanstack/react-query'

import { graphqlClient } from 'graphql/client'
import { GET_CHARACTERS } from 'graphql/queries'

import { GetCharactersType } from 'types'

export function useCharactersData() {
  const charactersQuery = useQuery<GetCharactersType, Error>(
    ['characters'],
    () => graphqlClient.request(GET_CHARACTERS),
    {
      staleTime: 1000 * 60 * 60 * 1, // 1 hour
    }
  )

  return charactersQuery
}
