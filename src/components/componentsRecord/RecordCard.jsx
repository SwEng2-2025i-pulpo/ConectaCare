import React from 'react'
import '../../style.css'
import { ShowFields } from './ShowFields'

function RecordCard ({ registro, index, camposMostrar, onEdit, editDisabled }) {
  return (
    <div className='w-full flex justify-center mb-5'>
      <div className='flex flex-col w-[90%] justify-center items-start p-4 gap-5 text-base font-semibold text-secondary bg-gray-100 rounded-3xl lg:w-[70%]'>
        <ShowFields camposMostrar={camposMostrar} registro={registro} />
        <div className='flex justify-center w-full'>
          <button
            className='viewEdit__button-enviar'
            onClick={() => onEdit(index)}
            disabled={editDisabled}
          >
            Editar
          </button>
        </div>
      </div>
    </div>
  )
}

export { RecordCard }
