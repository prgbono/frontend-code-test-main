import Footer from '../../ui/Footer'
import ProducerList from '../components/ProducerList'

const PersonDetails = ({ person }: any) => {
  const { name, birthYear, species, filmConnection } = person
  const producersList = filmConnection
    ? filmConnection.films.flatMap((film: any) => film.producers)
    : []

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
      <div className="flex flex-col items-center w-1/3 p-4 mb-4 border">
        <h3 className="text-lg font-bold">Title</h3>
        <p className="mb-10">Release Date</p>
        <p>Number of planets without water</p>
      </div>
      <div className="flex justify-between w-1/3">
        <button className="p-2 border">Prev</button>
        <button className="p-2 border">Next</button>
      </div>
      <Footer />
    </div>
  )
}

export default PersonDetails
