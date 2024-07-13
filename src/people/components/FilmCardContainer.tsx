import { useEffect, useState } from 'react'
import { Planet } from '../types'
import { getPlanetsByFilmId } from '../helpers/getPlanetsByFilmId'
import FilmCard from './FilmCard'

const getFilmDetails = (
  films: {
    id: string
    releaseDate: string
    title: string
    producers?: string[]
    __typename?: string
  }[]
): { id: string; releaseDate: string; title: string }[] => {
  return films.map((film) => ({
    id: film.id,
    releaseDate: film.releaseDate,
    title: film.title
  }))
}

const getDryPlanets = (
  planets: { surfaceWater: number; name: string; __typename: string }[]
): string[] => {
  return planets
    .filter((planet) => planet.surfaceWater === 0)
    .map((planet) => planet.name)
}

const FilmCardContainer = ({ films }: any) => {
  const filmDataArray = getFilmDetails(films)
  const filmIds = filmDataArray.map((film) => film.id)
  const [filmData, setFilmData] = useState<Planet | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPlanets = async () => {
      setLoading(true)
      setError(null)

      try {
        const planetPromises = filmIds.map((id) => getPlanetsByFilmId(id))

        const planetDataArray = await Promise.all(planetPromises)

        const getDryPlanetsPerFilm = planetDataArray.map((planetsFilm) => {
          if (planetsFilm) {
            return getDryPlanets(planetsFilm)
          }
          return []
        })

        const filmDataWithDryPlanets = filmDataArray.map((film, index) => ({
          ...film,
          dryPlanetsInTheFilm: getDryPlanetsPerFilm[index]
        }))

        setFilmData(filmDataWithDryPlanets)
      } catch (err) {
        typeof err === 'string'
          ? setError(err)
          : setError('An unexpected error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchPlanets()
  }, [films])

  // TODO: Remove comments
  console.log('filmData: ', filmData)

  return (
    <>
      {filmData && (
        <FilmCard
          title={filmData[5].title}
          releaseDate={filmData[5].releaseDate}
          dryPlanetsInTheFilm={filmData[5].dryPlanetsInTheFilm}
        />
      )}
      <div className="flex justify-between w-1/3">
        <button className="p-2 border">Prev</button>
        <button className="p-2 border">Next</button>
      </div>
    </>
  )
}

export default FilmCardContainer
