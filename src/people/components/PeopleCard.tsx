const PeopleCard = ({ person }: any) => {
  // TODO: any types
  return (
    <div className="flex items-center justify-center w-48 h-48 border">
      {person.name}
    </div>
  )
}

export default PeopleCard
