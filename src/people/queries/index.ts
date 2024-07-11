import { gql } from '@urql/core'

export const GET_PERSON_BY_ID_QUERY = gql`
  query getPersonById($id: ID!) {
    person(id: $id) {
      id
      name
      birthYear
      species {
        averageHeight
      }
    }
  }
`
export const ALL_PEOPLE_QUERY = gql`
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
