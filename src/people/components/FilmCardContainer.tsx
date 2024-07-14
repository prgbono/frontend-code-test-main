import { useEffect, useState } from 'react'
import { getPlanetsByFilmId } from '../helpers/getPlanetsByFilmId'
import FilmCard from './FilmCard'

type FilmCardField = {
  id: string
  title: string
  releaseDate: string
  dryPlanetsInTheFilm: string[]
}
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
  const [filmData, setFilmData] = useState<FilmCardField[] | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const [filmIndex, setFilmIndex] = useState<number>(0)

  useEffect(() => {
    const fetchPlanets = async () => {
      setLoading(true)
      setError(null)

      try {
        const planetPromises = filmIds.map((id) => getPlanetsByFilmId(id))

        const planetDataArray = await Promise.all(planetPromises)

        const getDryPlanetsPerFilm = planetDataArray.map((planetsFilm) => {
          if (planetsFilm) {
            return getDryPlanets(
              planetsFilm as {
                surfaceWater: number
                name: string
                __typename: string
              }[]
            )
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

  return (
    <>
      {filmData && (
        <FilmCard
          title={filmData[filmIndex].title}
          releaseDate={filmData[filmIndex].releaseDate}
          dryPlanetsInTheFilm={filmData[filmIndex].dryPlanetsInTheFilm}
        />
      )}
      <div className="flex justify-between w-1/3">
        <button
          className={`${
            filmIndex === 0
              ? 'bg-black-500 cursor-not-allowed opacity-60 p-2 border'
              : 'p-2 border'
          }`}
          onClick={() => setFilmIndex(filmIndex - 1)}
          disabled={filmIndex === 0}
        >
          Prev
        </button>
        <button
          className={`${
            filmData !== null && filmIndex && filmIndex === filmData.length - 1
              ? 'bg-black-500 cursor-not-allowed opacity-60 p-2 border'
              : 'p-2 border'
          }`}
          onClick={() => setFilmIndex(filmIndex + 1)}
          disabled={
            filmData !== null &&
            filmData !== undefined &&
            filmIndex === filmData.length - 1
          }
        >
          Next
        </button>
      </div>
    </>
  )
}

export default FilmCardContainer
