import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
  const onNavigateBack = () => {
    navigate(-1)
  }
  return (
    <footer className="flex justify-between w-1/3">
      <button className="p-2 border">Prev</button>
      <button className="p-2 border" onClick={onNavigateBack}>
        Home
      </button>
      <button className="p-2 border">Next</button>
    </footer>
  )
}

export default Footer
