import { Link } from 'react-router-dom'

const PeopleCard = ({ person }: any) => {
  const { name, id } = person
  // TODO: any types
  return (
    <Link to={`/person/${id}`}>
      <div className="flex items-center justify-center w-48 h-48 border">
        {name}
      </div>
    </Link>
  )
}

export default PeopleCard
