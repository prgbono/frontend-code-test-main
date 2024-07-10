import { getPeople } from '../helpers/getPeople'
import PeopleCard from './PeopleCard'

const PeopleList = () => {
  const people = getPeople()
  return (
    <div className="flex flex-col items-center min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-8">People</h1>
      <div className="grid grid-cols-3 gap-8">
        {people.map((person) => (
          <PeopleCard key={person.id} person={person} />
        ))}
      </div>
    </div>
  )
}

export default PeopleList
