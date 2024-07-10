import { gql, useQuery } from 'urql'

import PeopleCard from '../components/PeopleCard'
// import { Person } from '../types'

// TODO: Extract the query to a file of queries (constants file)
// TODO: Extract the fetch to getPeople function in helpers
const allPeopleQuery = gql`
  query Home {
    allPeople {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`

const HomePage = () => {
  const [result] = useQuery({ query: allPeopleQuery })
  const { data, fetching, error } = result

  // TODO: Loading state (spinner)
  if (fetching) return <p>Loading...</p>
  // TODO: Error state
  if (error) return <p>Oh no... {error.message}</p>

  return (
    <div className="flex flex-col items-center min-h-screen p-8">
      <h1 className="mb-8 text-2xl font-bold">People</h1>
      <div className="grid grid-cols-3 gap-8">
        {/* // FIXME: any types */}
        {data.allPeople.edges.map(({ node: person }: any) => (
          <PeopleCard key={person.id} person={person} />
        ))}
      </div>
    </div>
  )
}

export default HomePage
