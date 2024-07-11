import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
  const onNavigateBack = () => {
    navigate(-1)
  }
  return (
    <footer className="w-1/3 mt-4">
      <button
        className="w-full p-2 px-4 py-2 font-bold border"
        onClick={onNavigateBack}
      >
        Home
      </button>
    </footer>
  )
}

export default Footer
