import React, { useState } from 'react'
import '../style.css'

function ButtonForm ({ titleForm, children }) {
  const [mostrarFormulario, setMostrarFormulario] = useState(false)

  const toggleFormulario = () => {
    setMostrarFormulario(!mostrarFormulario)
    // console.log('mostrarFormulario', mostrarFormulario)
  }

  return (
    <div>
      <button className='bg-red-400' onClick={toggleFormulario}>
        {mostrarFormulario ? 'cerrar' : titleForm}
      </button>
      {mostrarFormulario && children}
    </div>
  )
}

export { ButtonForm }
