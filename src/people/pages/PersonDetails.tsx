import Footer from '../../ui/Footer'
import ProducerList from '../components/ProducerList'
import FilmCardContainer from '../components/FilmCardContainer'

const PersonDetails = ({ person }: any) => {
  // TODO: Remove comments
  // console.log('PersonDetails: ', person)
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
          <p>List of producers he has worked with and how many times:</p>
          <ul className="mb-12 list-disc list-inside">
            <ProducerList producers={producersList} />
          </ul>
        </>
      ) : null}
      <p className="mb-4">Birth year: {birthYear}</p>
      {species ? (
        <p className="mb-4">Species Average Height: {species.averageHeight}</p>
      ) : null}
      <h2 className="mb-2 text-xl">Films</h2>
      <FilmCardContainer films={films} />
      <Footer />
    </div>
  )
}

export default PersonDetails

/* TODO: Tests
DEbe renderizarse
Debe hacer lo que sea al hacer click en los botones Prev y Next
*/
