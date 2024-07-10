import Footer from '../../ui/Footer'
const PersonPage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      <h1 className="mb-12 text-2xl font-bold">Person 1 Name</h1>
      <p className="mb-12">
        This is PersonPAge List of producers he has worked with and how many
        times
      </p>
      <p className="mb-4">Species Average Height</p>
      <h2 className="mb-2 text-xl">Films</h2>
      <div className="flex flex-col items-center w-1/3 p-4 mb-4 border">
        <h3 className="text-lg font-bold">Title</h3>
        <p className="mb-10">Release Date</p>
        <p>Number of planets without water</p>
      </div>

      <Footer />
    </div>
  )
}

export default PersonPage
