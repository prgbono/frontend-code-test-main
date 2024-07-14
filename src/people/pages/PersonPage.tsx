import { useParams } from 'react-router-dom'
import { getPersonById } from '../helpers/getPersonById'
import { useEffect, useState } from 'react'
import PersonDetails from './PersonDetails'

interface Person {
  id: string
  name: string
}

const PersonPage = () => {
  const { personId } = useParams()
  const [person, setPerson] = useState<Person | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPerson = async () => {
      setLoading(true)
      setError(null)
      try {
        const personData = await getPersonById(personId as string)
        setPerson(personData)
      } catch (err) {
        typeof err === 'string'
          ? setError(err)
          : setError('An unexpected error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchPerson()
  }, [personId])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div>
      {person ? <PersonDetails person={person} /> : <p>No person found</p>}
    </div>
  )
}

export default PersonPage
