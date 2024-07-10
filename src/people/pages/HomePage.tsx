import { gql, useQuery } from 'urql'
import PeopleList from '../components/PeopleList'

const query = gql`
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
  const [data] = useQuery({ query })

  return <PeopleList />
}

export default HomePage
