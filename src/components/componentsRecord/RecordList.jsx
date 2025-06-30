import React from 'react'
import { RecordCard } from './RecordCard'
import { PlaceholderCard } from './PlaceholderCard'
import { EditFormWrapper } from './EditFormWrapper'

function RecordList ({
  registros,
  editando,
  editIndex,
  tipo,
  camposMostrar,
  FormComponent,
  onEdit,
  onUpdate
}) {
  // Si se está editando otro registros, renderizar otros registros bloqueados
  if (editando !== null && editando !== tipo) {
    return (
      <div className='w-full'>
        <div className='w-full p-5'>
          <div className='w-full space-y-5'>
            {registros.map((registro, index) => (
              <PlaceholderCard
                key={`placeholder-${tipo}-${index}`}
                registro={registro}
                index={index}
                camposMostrar={camposMostrar}
                tipo={tipo}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Renderizar lista normal
  return (
    <div className='w-full'>
      <div className='w-full'>
        {registros.map((registro, index) => {
          // Si estamos editando este registro específico
          if (editando === tipo && editIndex === index) {
            return (
              <EditFormWrapper
                key={`edit-${tipo}-${index}`}
                FormComponent={FormComponent}
                registro={registro}
                onSubmit={onUpdate}
                tipo={tipo}
                index={index}
              />
            )
          }

          // Renderizar tarjeta normal
          return (
            <RecordCard
              key={`registro-${tipo}-${index}`}
              registro={registro}
              index={index}
              camposMostrar={camposMostrar}
              tipo={tipo}
              onEdit={onEdit}
              editDisabled={editando !== null}
            />
          )
        })}
      </div>
    </div>
  )
}

export { RecordList }
