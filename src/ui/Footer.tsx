import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
  const navigateToHome = () => {
    navigate('/')
  }
  return (
    <footer className="w-1/3 mt-4">
      <button
        className="w-full p-2 px-4 py-2 font-bold border"
        onClick={navigateToHome}
      >
        Home
      </button>
    </footer>
  )
}

export default Footer
