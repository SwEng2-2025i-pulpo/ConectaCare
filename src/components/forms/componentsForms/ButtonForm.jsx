import '../../../style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

function ButtonForm ({ titleForm, children, id, mostrarFormulario, setMostrarFormulario, icon }) {
  const estaAbierto = mostrarFormulario === id

  const toggleFormulario = () => {
    setMostrarFormulario(estaAbierto ? false : id)
    // console.log('mostrarFormulario', mostrarFormulario)
  }

  const iconAngle = (
    <FontAwesomeIcon
      icon={faAngleDown}
      className={estaAbierto ? 'rotate-180' : ''}
    />
  )

  return (
    <div className='main'>
      <button
        className=' flex justify-between items-center
        w-[90%] h-20 px-6 py-2
        bg-secondary text-white text-base rounded-lg font-semibold cursor-pointer hover:bg-white hover:text-secondary hover:shadow-xl hover:border-1
      '
        onClick={toggleFormulario}
      >
        <div className='flex items-center gap-3'>
          {icon}
          {estaAbierto ? 'Cerrar' : titleForm}
        </div>
        {iconAngle}
      </button>
      {estaAbierto && children}
    </div>
  )
}

export { ButtonForm }
