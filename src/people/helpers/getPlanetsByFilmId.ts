import { createRequest } from '@urql/core'
import { urqlClient } from './urqlClient'
import { GET_PLANETS_BY_FILM_ID_QUERY } from '../queries'
import { Film, Planet } from '../../generated/graphql'
import { Maybe } from 'graphql/jsutils/Maybe'

export const getPlanetsByFilmId = async (
  id: string
): Promise<Maybe<Planet>[] | null> => {
  const request = createRequest(GET_PLANETS_BY_FILM_ID_QUERY, { id })
  try {
    const result = await urqlClient
      .executeQuery<{ film: Film }>(request)
      .toPromise()

    if (result.error) {
      throw new Error(result.error.message)
    }

    return result.data?.film.planetConnection?.planets || null
  } catch (error) {
    throw error
  }
}
