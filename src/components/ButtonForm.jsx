import '../style.css'

function ButtonForm ({ titleForm, children, id, mostrarFormulario, setMostrarFormulario }) {
  const estaAbierto = mostrarFormulario === id

  const toggleFormulario = () => {
    setMostrarFormulario(estaAbierto ? false : id)
    // console.log('mostrarFormulario', mostrarFormulario)
  }

  return (
    <div>
      <button className='bg-red-400' onClick={toggleFormulario}>
        {estaAbierto ? 'cerrar' : titleForm}
      </button>
      {estaAbierto && children}
    </div>
  )
}

export { ButtonForm }
