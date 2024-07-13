import { formatDate } from '../helpers/formatDate'

type FilmCardProps = {
  title: string
  releaseDate: string
  dryPlanetsInTheFilm: string[]
}

const FilmCard = ({
  title,
  releaseDate,
  dryPlanetsInTheFilm
}: FilmCardProps) => {
  console.log('FilmCard: dryPlanetsInTheFilm: ' + dryPlanetsInTheFilm)
  return (
    <div className="flex flex-col items-center w-1/3 p-4 mb-4 border">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mb-10">Release Date: {formatDate(releaseDate)}</p>
      <p>
        Number of planets without water:{' '}
        {dryPlanetsInTheFilm.length === 0
          ? 'There is no planets without water in this film'
          : `${dryPlanetsInTheFilm.length}`}
      </p>
      <ul className="list-disc list-inside">
        {dryPlanetsInTheFilm.map((planet) => (
          <li key={planet}>{planet}</li>
        ))}
      </ul>
    </div>
  )
}

export default FilmCard
