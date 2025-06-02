import '../../style.css'
import { useState } from 'react'
import { NoticeSend } from '../forms/componentsForms/NoticeSend'

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
    setEditando(tipo) // Indica qué tipo está editando
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

  return (
    <div>
      {mensaje && <NoticeSend mensaje={mensaje} />}
      <ul>
        {editando === tipo && editIndex !== null
          ? (
            <li key={editIndex}>
              <FormComponent
                onSubmit={handleUpdate}
                defaultValues={registros[editIndex]}
              />
            </li>
            )
          : (
              editando === null &&
        registros.map((registro, index) => (
          <li key={index}>
            {camposMostrar.map((campo, i) => (
              <span key={i}>{registro[campo]}{i < camposMostrar.length - 1 ? ' - ' : ''}</span>
            ))}
            <button onClick={() => handleEdit(index)}>Editar</button>
          </li>
        ))
            )}
      </ul>
    </div>
  )
}

export { ViewEditRecords }
