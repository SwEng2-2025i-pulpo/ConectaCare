import '../../style.css'
import logo from '../../assets/images/conectaCare.svg'
import { Link } from 'react-router-dom'

function Header () {
  return (
    <header className='bg-primary w-full h-28 flex justify-center'>
      <Link to='/'>
        <img className='h-full' src={logo} alt='Logo aplicacion' />
      </Link>
      <nav className='hidden lg:flex'>
        <Link className='lg' to='/form' />
      </nav>
    </header>
  )
}

export { Header }
