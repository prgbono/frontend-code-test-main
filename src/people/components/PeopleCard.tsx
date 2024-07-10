import { Person } from '../types'

const PeopleCard = (person: Person) => {
  console.log(' PEopleCard person: ', person)
  return (
    <div
      key={person.id}
      className="flex items-center justify-center w-48 h-48 border"
    >
      {person.superhero}
    </div>
  )
}

export default PeopleCard
