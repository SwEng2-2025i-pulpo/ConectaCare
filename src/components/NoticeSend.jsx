import { useState, useEffect } from 'react'
import '../style.css'

function NoticeSend ({ mensaje, onClose }) {
  const [mostrar, setMostrar] = useState(true)

  const toggleSalir = () => {
    setMostrar(false)
    if (onClose) onClose()
  }

  useEffect(() => {
    document.body.style.overflow = mostrar ? 'hidden' : 'auto'
    return () => { document.body.style.overflow = 'auto' }
  }, [mostrar])

  if (!mostrar) return null

  return (
    <>
      {/* Overlay oscuro para bloquear e indicar modal */}
      <div className='fixed inset-0 w-full h-full z-40 bg-black/70' />
      {/* Mensaje centrado en el viewport */}
      <div className='fixed inset-0 flex items-center justify-center z-50'>
        <section className='
        w-11/12 h-auto flex flex-col items-center justify-center
        bg-primary text-white p-8
        rounded-2xl shadow-lg lg:w-[35%]
        '
        >
          <h1 className='text-base font-medium'>{mensaje}</h1>
          <button
            className='
          w-[40%] h-auto bg-white text-secondary
          text-base font-semibold
          rounded-xl p-2 mt-8 shadow-2xl cursor-pointer
          hover:bg-secondary hover:text-white transition-colors duration-300
          ' onClick={toggleSalir}
          >Cerrar
          </button>
        </section>
      </div>
    </>
  )
}

export { NoticeSend }
