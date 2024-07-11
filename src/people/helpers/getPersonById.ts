import { createRequest } from '@urql/core'
import { urqlClient } from './urqlClient'
import { GET_PERSON_BY_ID_QUERY } from '../queries'
import { Person } from '../types'

export const getPersonById = async (id: string): Promise<Person | null> => {
  const request = createRequest(GET_PERSON_BY_ID_QUERY, { id })

  try {
    const result = await urqlClient
      .executeQuery<{ person: Person }>(request)
      .toPromise()

    if (result.error) {
      throw new Error(result.error.message)
    }

    return result.data?.person || null
  } catch (error) {
    throw error
  }
}
