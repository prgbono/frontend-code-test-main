const PeopleCard = ({ person }: any) => {
  // FIXME: Add proper type (person)
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
