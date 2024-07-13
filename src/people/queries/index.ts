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
      filmConnection {
        films {
          producers
          title
          releaseDate
          id
        }
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

export const GET_PLANETS_BY_FILM_ID_QUERY = gql`
  query getPlanetsByFilmId($id: ID!) {
    film(id: $id) {
      id
      planetConnection {
        planets {
          surfaceWater
          name
        }
      }
    }
  }
`
