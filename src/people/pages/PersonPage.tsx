// FIXME: Remove type to another file. Reuse it in PeopleCard component
import Footer from '../../ui/Footer'
import { Person } from '../types'
const PersonPage = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters
}: Person) => {
  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-12">Person 1 Name</h1>
      <p className="mb-12">
        This is PersonPAge List of producers he has worked with and how many
        times
      </p>
      <p className="mb-4">Species Average Height</p>
      <h2 className="text-xl mb-2">Films</h2>
      <div className="flex flex-col items-center border p-4 mb-4 w-1/3">
        <h3 className="text-lg font-bold">Title</h3>
        <p className="mb-10">Release Date</p>
        <p>Number of planets without water</p>
      </div>

      <Footer />
    </div>
  )
}

export default PersonPage
