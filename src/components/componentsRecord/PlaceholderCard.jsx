import React from 'react'
import '../../style.css'
import { ShowFields } from './ShowFields'

function PlaceholderCard ({ registro, camposMostrar }) {
  return (
    <div className='w-full flex justify-center'>
      <div className='flex flex-col w-[90%] justify-center items-start p-4 gap-5 text-base font-semibold text-gray-400 bg-gray-200 rounded-3xl opacity-50'>
        <ShowFields camposMostrar={camposMostrar} registro={registro} />
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
  )
}

export { PlaceholderCard }
