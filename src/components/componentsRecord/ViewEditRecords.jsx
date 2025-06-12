import '../../style.css'
import { useState } from 'react'
import { NoticeSend } from '../NoticeSend'

function ViewEditRecords ({
  registros = [],
  setRegistros,
  comunicado,
  FormComponent,
  camposMostrar,
  editando,
  setEditando,
  tipo
}) {
  const [editIndex, setEditIndex] = useState(null)
  const [mensaje, setMensaje] = useState('')

  const handleEdit = (index) => {
    setEditIndex(index)
    setEditando(tipo)
    setMensaje('')
  }

  const handleUpdate = (data) => {
    const original = registros[editIndex]
    if (JSON.stringify(original) === JSON.stringify(data)) {
      setMensaje('No se realizaron cambios')
      setEditIndex(null)
      setEditando(null)
      return
    }
    const nuevosRegistros = [...registros]
    nuevosRegistros[editIndex] = data
    setRegistros(nuevosRegistros)
    setEditIndex(null)
    setEditando(null)
    setMensaje(comunicado)
  }

  // Si no hay registros, no renderizar nada
  if (!registros || registros.length === 0) {
    return null
  }

  // Si se está editando otro tipo, renderizar solo un placeholder para mantener el espacio
  if (editando !== null && editando !== tipo) {
    return (
      <div className='w-full'>
        <div className='w-full bg-red-400 p-5'>
          <div className='w-full space-y-5'>
            {registros.map((_, index) => (
              <div
                key={`placeholder-${tipo}-${index}`}
                className='w-full flex justify-center mb-5'
              >
                <div className='flex flex-col w-[90%] justify-center items-start p-4 gap-5 text-base font-semibold text-gray-400 bg-gray-200 rounded-3xl opacity-50'>
                  <div>
                    {camposMostrar.map((campo, i) => (
                      <span key={i}>
                        {registros[index][campo]}
                        {i < camposMostrar.length - 1 ? ' | ' : ''}
                      </span>
                    ))}
                  </div>
                  <div className='flex justify-center w-full'>
                    <button
                      className='w-1/2 h-auto flex justify-center bg-gray-400 p-1 border-1 rounded-3xl text-white cursor-not-allowed opacity-50'
                      disabled
                    >
                      Editar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='w-full'>
      {mensaje && <NoticeSend mensaje={mensaje} />}

      <div className='w-full p-5'>
        <div className='w-full'>
          {registros.map((registro, index) => {
            // Si estamos editando este registro específico
            if (editando === tipo && editIndex === index) {
              return (
                <div
                  key={`edit-${tipo}-${index}`}
                  className='w-full flex justify-center mb-5'
                >
                  <div className='w-[90%]'>
                    <FormComponent
                      onSubmit={handleUpdate}
                      defaultValues={registro}
                    />
                  </div>
                </div>
              )
            }

            // Si NO estamos editando este registro, mostrar la tarjeta normal
            return (
              <div
                key={`registro-${tipo}-${index}`}
                className='w-full flex justify-center mb-5'
              >
                <div className='flex flex-col w-[90%] justify-center items-start p-4 gap-5 text-base font-semibold text-secondary bg-gray-100 rounded-3xl'>
                  <div>
                    {camposMostrar.map((campo, i) => (
                      <span key={i}>
                        {registro[campo]}
                        {i < camposMostrar.length - 1 ? ' | ' : ''}
                      </span>
                    ))}
                  </div>
                  <div className='flex justify-center w-full'>
                    <button
                      className='w-1/2 h-auto flex justify-center bg-secondary p-1 border-1 rounded-3xl text-white hover:bg-white hover:text-secondary transition-colors disabled:opacity-50'
                      onClick={() => handleEdit(index)}
                      disabled={editando !== null}
                    >
                      Editar
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export { ViewEditRecords }
