import { Client } from '@urql/core'
import { cacheExchange, fetchExchange } from 'urql'

export const urqlClient = new Client({
  url: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  exchanges: [cacheExchange, fetchExchange]
})
