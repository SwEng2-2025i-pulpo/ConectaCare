import { useState } from 'react'
import '../style.css'

function NoticeSend () {
  const [mostrar, setMostrar] = useState(true)

  const toggleSalir = () => {
    setMostrar(false)
    // console.log('mostrar', mostrar)
  }

  if (!mostrar) {
    return null // <-- oculta el componente completamente
  }

  return (
    <section className='absolute inset-0 w-screen h-screen grid place-items-center bg-black/70'>
      <h1>Mensaje eviado</h1>
      <button onClick={toggleSalir}>Salir</button>
    </section>
  )
}

export { NoticeSend }
