import PeopleCard from '../components/PeopleCard'
import { useEffect, useState } from 'react'
import { getPeople } from '../helpers/getPeople'

const HomePage = () => {
  const [people, setPeople] = useState<any | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPeople = async () => {
      setLoading(true)
      setError(null)
      try {
        const personData = await getPeople()
        setPeople(personData)
      } catch (err) {
        typeof err === 'string'
          ? setError(err)
          : setError('An unexpected error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchPeople()
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div className="flex flex-col items-center min-h-screen p-8">
      <h1 className="mb-8 text-2xl font-bold">People</h1>
      <div className="grid grid-cols-3 gap-8">
        {people.allPeople.edges.map(({ node: person }: any) => (
          <PeopleCard key={person.id} person={person} />
        ))}
      </div>
    </div>
  )
}

export default HomePage
