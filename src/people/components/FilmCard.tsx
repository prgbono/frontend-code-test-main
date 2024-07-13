import { useEffect, useState } from 'react'
import { Planet } from '../types'
import { getPlanetsByFilmId } from '../helpers/getPlanetsByFilmId'

const getMovieDetails = (
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

const FilmCard = ({ films }: any) => {
  const filmData = getMovieDetails(films)
  const filmIds = filmData.map((film) => film.id)

  const [dryPlanets, setDryPlanets] = useState<Planet | null>(null)
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
        setDryPlanets(getDryPlanetsPerFilm)
        const filmDataWithDryPlanets = filmData.map((film, index) => ({
          ...film,
          dryPlanetsInTheFilm: dryPlanets[index]
        }))
        console.log('filmDataWithDryPlanets: ', filmDataWithDryPlanets)
        setDryPlanets(filmDataWithDryPlanets)
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
  // console.log('filmData: ', filmData)
  // console.log('dryPlanets: ', dryPlanets)

  return (
    <>
      <div className="flex flex-col items-center w-1/3 p-4 mb-4 border">
        <h3 className="text-lg font-bold">Title</h3>
        <p className="mb-10">Release Date</p>
        <p>Number of planets without water</p>
      </div>
      <div className="flex justify-between w-1/3">
        <button className="p-2 border">Prev</button>
        <button className="p-2 border">Next</button>
      </div>
    </>
  )
}

export default FilmCard
