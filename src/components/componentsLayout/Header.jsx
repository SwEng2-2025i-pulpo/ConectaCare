import '../../style.css'
import { useState } from 'react'
import logo from '../../assets/images/conectaCare.svg'
import { Link } from 'react-router-dom'

function Header () {
  const [abriMenu, setAbriMenu] = useState(false)

  const handleAbrir = () => {
    setAbriMenu(!abriMenu)
  }

  return (
    <header className='bg-white'>
      <a href=''>
        <img className='w-24 h-24' src={logo} alt='Logo aplicacion' />
      </a>
      <button onClick={handleAbrir}>Abrir menu</button>
      {abriMenu && (
        <nav>
          <ul>
            <li>
              <Link to='/'>Inicio</Link>
              <Link to='/form'>Registrar cuidado</Link>
              <Link to='/registros'>Registros</Link>
            </li>
            <li><a href='/records'>Registros</a></li>
            <li><a href='/profile'>Perfil</a></li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export { Header }
