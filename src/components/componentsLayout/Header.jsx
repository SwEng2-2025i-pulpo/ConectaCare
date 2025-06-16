import '../../style.css'
import logo from '../../assets/images/conectaCare.svg'
import { Link } from 'react-router-dom'

function Header () {
  const handleClick = () => {
    window.location.hash = '#footer'
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
        </ul>
      </nav>
    </header>
  )
}

export { Header }
