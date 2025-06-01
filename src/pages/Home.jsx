import { Link } from 'react-router-dom'

function Home () {
  return (
    <div>
      <h1>ConectaCare</h1>
      <Link to='/form'><button>Registrar cuidado</button></Link>
    </div>
  )
}

export { Home }
