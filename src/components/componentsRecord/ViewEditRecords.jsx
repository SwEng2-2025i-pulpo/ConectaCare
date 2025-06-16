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
        console.log('Registros:', data)
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

  // ...existing code...
  const handleUpdate = async (data) => {
    const original = registros[editIndex]
    // Usa el campo correcto según tu backend: uuid, id, _id, etc.
    const id = original.uuid || original.id || original._id
    if (!id) {
      setMensaje('No se encontró el identificador del registro')
      return
    }
    const url = `${endPoint}/${id}`
    console.log('PUT a:', url, 'con datos:', data)

    try {
      const updated = await putData(url, data)
      const nuevosRegistros = [...registros]
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
  // ...existing code...

  // Si se está editando otro tipo, renderizar solo un placeholder para mantener el espacio
  if (editando !== null && editando !== tipo) {
    return (
      <div className='w-full'>
        <div className='w-full p-5'>
          <div className='w-full space-y-5'>
            {registros.map((_, index) => (
              <div
                key={`placeholder-${tipo}-${index}`}
                className='w-full flex justify-center'
              >
                <div className='flex flex-col w-[90%] justify-center items-start p-4 gap-5 text-base font-semibold text-gray-400 bg-gray-200 rounded-3xl opacity-50'>
                  <div className='flex flex-wrap gap-2'>
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
                      className='viewEdit__button-enviar'
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
      {mensaje && <NoticeSend mensaje={mensaje} onClose={() => setMensaje('')} />}

      <div className='w-full'>
        <div className='w-full'>
          {registros.map((registro, index) => {
            // Si estamos editando este registro específico
            if (editando === tipo && editIndex === index) {
              console.log('Editando registro:', registro)
              return (
                <div
                  key={`edit-${tipo}-${index}`}
                  className='
                  w-full flex justify-center mb-5
                  lg:pl-[300px]
                  '
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
                <div className='flex flex-col w-[90%] justify-center items-start p-4 gap-5 text-base font-semibold text-secondary bg-gray-100 rounded-3xl lg:w-[70%]'>
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
                      className='viewEdit__button-enviar'
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
