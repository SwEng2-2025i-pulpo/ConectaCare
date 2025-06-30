import React from 'react'

function EditFormWrapper ({ FormComponent, registro, onSubmit }) {
  return (
    <div
      className='
      w-full flex justify-center mb-5
      lg:pl-[300px]
      '
    >
      <div className='w-[90%]'>
        <FormComponent
          onSubmit={onSubmit}
          defaultValues={registro}
        />
      </div>
    </div>
  )
}

export { EditFormWrapper }
