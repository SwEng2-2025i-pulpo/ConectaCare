import { Link } from 'react-router-dom'

function Home () {
  return (
    <div className='flex flex-col'>
      <h1>ConectaCare</h1>
      <Link to='/form'><button>Registrar cuidado</button></Link>
      <Link to='/registros'><button>Registros</button></Link>
    </div>
  )
}

export { Home }
