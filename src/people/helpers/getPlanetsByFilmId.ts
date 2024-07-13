import { createRequest } from '@urql/core'
import { urqlClient } from './urqlClient'
import { GET_PLANETS_BY_FILM_ID_QUERY } from '../queries'
import { Planet } from '../types'

export const getPlanetsByFilmId = async (
  id: string
): Promise<Planet | null> => {
  const request = createRequest(GET_PLANETS_BY_FILM_ID_QUERY, { id })
  try {
    const result = await urqlClient
      .executeQuery<{ planet: Planet }>(request)
      .toPromise()

    if (result.error) {
      throw new Error(result.error.message)
    }

    // FIXME:
    return result.data?.film.planetConnection.planets || null
  } catch (error) {
    throw error
  }
}
