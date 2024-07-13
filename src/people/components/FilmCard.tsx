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
  return (
    <div className="flex flex-col items-center w-1/3 p-4 mb-4 border">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mb-10">
        <strong>Release Date:</strong>
        {formatDate(releaseDate)}
      </p>
      <p>
        <strong>Number of planets without water:</strong>
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
