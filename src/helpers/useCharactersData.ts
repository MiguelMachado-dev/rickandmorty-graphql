import { useQuery } from '@tanstack/react-query'

import { graphqlClient } from 'graphql/client'
import { Characters } from 'graphql/generated/graphql'
import { GET_CHARACTERS } from 'graphql/queries'

export function useCharactersData() {
  const charactersQuery = useQuery<Characters, Error>(
    ['characters'],
    () => graphqlClient.request(GET_CHARACTERS),
    {
      staleTime: 1000 * 60 * 60 * 1, // 1 hour
    }
  )

  return charactersQuery
}
