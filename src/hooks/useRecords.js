import { useState, useEffect } from 'react'
import { getData } from '../utils/apiGet.js'
import { putData } from '../utils/apitPut.js'

function useRecords (endPoint, setRegistros, comunicado, setEditando, refresh, setRefresh) {
  const [editIndex, setEditIndex] = useState(null)
  const [mensaje, setMensaje] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const handleEdit = (index, tipo) => {
    setEditIndex(index)
    setEditando(tipo)
    setMensaje('')
  }

  const handleUpdate = async (data, registros) => {
    const original = registros[editIndex]
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
  }, [refresh, endPoint, setRegistros])

  return {
    editIndex,
    mensaje,
    setMensaje,
    loading,
    error,
    handleEdit,
    handleUpdate
  }
}

export { useRecords }
