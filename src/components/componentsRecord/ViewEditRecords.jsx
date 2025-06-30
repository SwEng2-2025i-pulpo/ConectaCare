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
  endPoint
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

  const onEdit = (index) => handleEdit(index, tipo)
  const onUpdate = (data) => handleUpdate(data, registros)

  return (
    <div className='w-full'>
      {mensaje && <NoticeSend mensaje={mensaje} onClose={() => setMensaje('')} />}

      <RecordList
        registros={registros}
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
