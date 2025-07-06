import React, { useState } from 'react'

function LoginInput ({ label, id, register, required, error, type, showPasswordToggle, ...props }) {
  const [showPassword, setShowPassword] = useState(false)

  const togglePassword = () => {
    setShowPassword(!showPassword)
  }

  const inputType = type === 'password' && showPasswordToggle
    ? (showPassword ? 'text' : 'password')
    : type

  return (
    <div className='form-div'>
      <label className='login-div__label' htmlFor={id}>
        {label}
      </label>

      <div className='relative'>
        <input
          className={`login__input ${showPasswordToggle ? 'pr-12' : ''}`}
          id={id}
          type={inputType}
          {...register(id, required)}
          {...props}
        />

        {type === 'password' && showPasswordToggle && (
          <button
            type='button'
            onClick={togglePassword}
            className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800 hover:font-bold text-sm pr-8 cursor-pointer lg:text-xs lg:pr-12'
          >
            {showPassword ? 'Ocultar' : 'Mostrar'}
          </button>
        )}
      </div>

      {error && <span className='form-div__error'>{error.message}</span>}
    </div>
  )
}

export { LoginInput }
