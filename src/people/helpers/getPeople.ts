import { createRequest } from '@urql/core'
import { urqlClient } from './urqlClient'
import { ALL_PEOPLE_QUERY } from '../queries'

export const getPeople = async (): Promise<any> => {
  const request = createRequest(ALL_PEOPLE_QUERY, {})

  try {
    const result = await urqlClient
      .executeQuery<{ person: any }>(request)
      .toPromise()

    if (result.error) {
      throw new Error(result.error.message)
    }

    return result.data || null
  } catch (error) {
    throw error
  }
}
