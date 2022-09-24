import { GraphQLClient } from 'graphql-request'

const endpoint = import.meta.env.VITE_GRAPHQL_HOST || ''

const graphqlClient = new GraphQLClient(endpoint)

export { graphqlClient }
