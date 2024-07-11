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
  query getPlanetsByFilmId($filmId: ID!) {
    film(id: $filmId) {
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

/* TODO: 
Esta consulta te da los planetas que hay en la pelicúla con ese film id. 
Ekemplo de respueta para este id de film:
query getPlanetsByFilmId($filmId: ID!) {
film(id: "ZmlsbXM6Mg==") {
      id
      planetConnection {
        planets {
          surfaceWater
          name
        }
      }
      
  }
}

REspuesta
{
  "data": {
    "film": {
      "id": "ZmlsbXM6Mg==",
      "planetConnection": {
        "planets": [
          {
            "surfaceWater": 100,
            "name": "Hoth"
          },
          {
            "surfaceWater": 8,
            "name": "Dagobah"
          },
          {
            "surfaceWater": 0,
            "name": "Bespin"
          },
          {
            "surfaceWater": 10,
            "name": "Ord Mantell"
          }
        ]
      }
    }
  }
}


*/
