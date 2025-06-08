import '../../../style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

function ButtonForm ({ titleForm, children, id, mostrarFormulario, setMostrarFormulario, icon }) {
  const estaAbierto = mostrarFormulario === id

  const toggleFormulario = () => {
    setMostrarFormulario(estaAbierto ? false : id)
    // console.log('mostrarFormulario', mostrarFormulario)
  }

  return (
    <div className='w-full h-auto flex justify-center
    items-center'
    >
      <button
        className=' flex justify-between items-center
        w-5/6 h-20 px-6 py-2
        bg-secondary text-white rounded-xl
      '
        onClick={toggleFormulario}
      >
        <div className='flex items-center gap-3'>
          {icon}
          {estaAbierto ? 'cerrar' : titleForm}
        </div>
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
      {estaAbierto && children}
    </div>
  )
}

export { ButtonForm }
