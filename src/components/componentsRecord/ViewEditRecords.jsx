import '../../style.css'
import { useState, useEffect } from 'react'
import { NoticeSend } from '../NoticeSend'
import { getData } from '../../utils/apiGet'
import { putData } from '../../utils/apitPut'

function ViewEditRecords ({
  registros = [],
  setRegistros,
  comunicado,
  FormComponent,
  camposMostrar,
  editando,
  setEditando,
  tipo,
  endPoint
}) {
  const [editIndex, setEditIndex] = useState(null)
  const [mensaje, setMensaje] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [refresh, setRefresh] = useState(false)

  const handleEdit = (index) => {
    setEditIndex(index)
    setEditando(tipo)
    setMensaje('')
  }
  useEffect(() => {
    getData(endPoint)
      .then(data => {
        setRegistros(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [refresh])

  if (loading) return <div>Cargando...</div>
  if (error) return <div>Error: {error}</div>

  // Si no hay registros, no renderizar nada
  if (!registros || registros.length === 0) {
    return null
  }

  const handleUpdate = async (data) => {
    const original = registros[editIndex]
    if (JSON.stringify(original) === JSON.stringify(data)) {
      setMensaje('No se realizaron cambios')
      setEditIndex(null)
      setEditando(null)
      return
    }

    try {
      const updated = await putData(endPoint, data)
      const nuevosRegistros = [...registros]
      // Fusiona el original y el actualizado
      nuevosRegistros[editIndex] = { ...registros[editIndex], ...updated }
      setRegistros(nuevosRegistros)
      setEditIndex(null)
      setEditando(null)
      setMensaje(comunicado)
      setRefresh(!refresh)
    } catch (error) {
      setMensaje('Error al actualizar el registro')
    }
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
                        <span>{campo}:</span>{' '}
                        {(campo === 'datetime' || campo === 'date')
                          ? new Date(registros[index][campo]).toLocaleString('es-CO', {
                            dateStyle: 'medium',
                            timeStyle: 'short'
                          })
                          : campo === 'blood_pressure'
                            ? `Sistólica: ${registros[index][campo]?.systolic ?? '-'} / Diastólica: ${registros[index][campo]?.diastolic ?? '-'}`
                            : registros[index][campo]}
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
              console.log('Editando registro:', registro)
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
                      <span className='font-medium' key={i}>
                        <span className='font-bold'>{campo}:</span>{' '}
                        {(campo === 'datetime' || campo === 'date')
                          ? new Date(registros[index][campo]).toLocaleString('es-CO', {
                            dateStyle: 'medium',
                            timeStyle: 'short'
                          })
                          : campo === 'blood_pressure'
                            ? `Sistólica: ${registros[index][campo]?.systolic ?? '-'} / Diastólica: ${registros[index][campo]?.diastolic ?? '-'}`
                            : registros[index][campo]}
                        {i < camposMostrar.length - 1 && <br />}
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
