import '../../style.css'
import logo from '../../assets/images/conectaCare.svg'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

function Header () {
  const { logout } = useAuth()

  const handleClick = () => {
    window.location.hash = '#footer'
  }

  const handleLogout = () => {
    logout()
  }

  return (
    <header className='
    bg-primary w-full h-28 flex justify-center
    lg:h-24 lg:justify-between lg:items-center lg:px-16
    '
    >
      <Link to='/'>
        <img className='h-full lg:h-24' src={logo} alt='Logo aplicacion' />
      </Link>
      <nav className='hidden lg:flex'>
        <ul className='
        w-auto h-full gap-10 flex justify-between items-center text-white text-lg'
        >
          <li className='nav__ul__li'>
            <Link to='/'>Inicio</Link>
          </li>
          <li className='nav__ul__li'>
            <Link to='/registros'>Registros</Link>
          </li>
          <li className='nav__ul__li cursor-pointer'>
            <span onClick={handleClick}>Sobre Nosotros</span>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className='bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg border border-white/20 transition-all duration-200 hover:scale-105 cursor-pointer'
            >
              Cerrar Sesión
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export { Header }
