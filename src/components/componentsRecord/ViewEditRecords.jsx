import '../../style.css'
import { NoticeSend } from '../NoticeSend'
import { RecordList } from './RecordList'
import { useRecords } from '../../hooks/useRecords.js'

function ViewEditRecords ({
  registros = [],
  setRegistros,
  comunicado,
  FormComponent,
  camposMostrar,
  editando,
  setEditando,
  tipo,
  endPoint,
  filteredRegistros = null // Registros ya filtrados desde el padre
}) {
  const {
    editIndex,
    mensaje,
    setMensaje,
    loading,
    error,
    handleEdit,
    handleUpdate
  } = useRecords(endPoint, setRegistros, comunicado, setEditando, false, () => {})

  if (loading) return <div>Cargando...</div>
  if (error) return <div>Error: {error}</div>

  // Si no hay registros, no renderizar nada
  if (!registros || registros.length === 0) {
    return null
  }

  // Usar registros filtrados si están disponibles, sino usar todos
  const registrosToShow = filteredRegistros || registros

  const onEdit = (index) => {
    // Encontrar el índice original si estamos usando registros filtrados
    if (filteredRegistros) {
      const originalIndex = registros.findIndex(r => r === filteredRegistros[index])
      handleEdit(originalIndex, tipo)
    } else {
      handleEdit(index, tipo)
    }
  }
  const onUpdate = (data) => handleUpdate(data, registros)

  return (
    <div className='w-full'>
      {mensaje && <NoticeSend mensaje={mensaje} onClose={() => setMensaje('')} />}

      <RecordList
        registros={registrosToShow}
        editando={editando}
        editIndex={editIndex}
        tipo={tipo}
        camposMostrar={camposMostrar}
        FormComponent={FormComponent}
        onEdit={onEdit}
        onUpdate={onUpdate}
      />
    </div>
  )
}

export { ViewEditRecords }
