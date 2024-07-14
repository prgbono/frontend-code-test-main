import Footer from '../../ui/Footer'
import ProducerList from '../components/ProducerList'
import FilmCardContainer from '../components/FilmCardContainer'

const PersonDetails = ({ person }: any) => {
  const { name, birthYear, species, filmConnection } = person
  const producersList = filmConnection
    ? filmConnection.films.flatMap((film: any) => film.producers)
    : []
  const films = filmConnection ? filmConnection.films : []

  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      <h1 className="mb-12 text-2xl font-bold">{name}</h1>
      {producersList.length > 0 ? (
        <>
          <p>
            <strong>
              List of producers he has worked with and how many times:
            </strong>
          </p>
          <ul className="mb-12 list-disc list-inside">
            <ProducerList producers={producersList} />
          </ul>
        </>
      ) : null}
      <p className="mb-4">
        <strong>Birth year:</strong>
        {birthYear}
      </p>
      {species && species.averageHeight ? (
        <p className="mb-4">
          <strong>Species Average Height:</strong>
          {species.averageHeight}
        </p>
      ) : (
        <p className="mb-4">
          <strong>Species Average Height:</strong> There is no date for this
          person
        </p>
      )}
      <h2 className="mb-2 text-xl">Films</h2>
      <FilmCardContainer films={films} />
      <Footer />
    </div>
  )
}

export default PersonDetails
