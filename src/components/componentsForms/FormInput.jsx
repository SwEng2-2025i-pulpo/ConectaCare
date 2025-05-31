import React from 'react'
import '../../style.css'

function FormInput ({ label, id, register, required, error, ...props }) {
  return (
    <div>
      <label htmlFor={id}>
        {label}
        {required && <span className='text-red-600'>*</span>}
      </label>
      <input id={id} {...register(id, required)} {...props} />
      {error && <span>{error.message}</span>}
    </div>
  )
}

export { FormInput }
