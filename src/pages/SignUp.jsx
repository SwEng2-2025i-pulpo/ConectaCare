import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { LoginInput } from '../components/login/LoginInput'
import { ButtonSubmit } from '../components/forms/componentsForms/ButtonSubmit'
import { MessageAlert } from '../components/MessageAlert'
import { registerUser } from '../utils/apiRegister'

function SignUp () {
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm()
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  // Observar el valor del campo password
  const password = watch('password')

  const onSubmit = async (data) => {
    setLoading(true)
    setMessage('')

    try {
      const userData = {
        name: data.name.trim(),
        last_name: data.last_name.trim(),
        email: data.email.trim().toLowerCase(),
        password: data.password,
        confirm_password: data.confirm_password
      }

      await registerUser(userData)

      setMessage('¡Cuenta creada exitosamente!')
      reset()

      // Redireccionar al login
      setTimeout(() => {
        navigate('/login')
      }, 2000)
    } catch (error) {
      setMessage(`Error al crear la cuenta: ${error.message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='signup__div'>
      <main className='signup__main'>
        <div className='signup__h1__div'>
          <h1 className='login-title'>Crear Cuenta</h1>
          <h3 className='login-subtitle'>Crea una nueva cuenta
          </h3>
        </div>

        <MessageAlert message={message} />

        <form className='signup__form' onSubmit={handleSubmit(onSubmit)}>
          <LoginInput
            label='Nombre Cuidador'
            type='text'
            id='name'
            placeholder='Nombre Cuidador'
            register={register}
            required={{ required: 'El nombre es obligatorio' }}
            error={errors.name}
          />
          <LoginInput
            label='Apellido Cuidador'
            type='text'
            id='last_name'
            placeholder='Apellido Cuidador'
            register={register}
            required={{ required: 'El apellido es obligatorio' }}
            error={errors.last_name}
          />
          <LoginInput
            label='Email Cuidador'
            type='email'
            id='email'
            placeholder='Email'
            register={register}
            required={{
              required: 'El email es obligatorio',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Ingresa un email válido'
              }
            }}
            error={errors.email}
          />
          <LoginInput
            label='Contraseña'
            type='password'
            id='password'
            placeholder='Contraseña'
            register={register}
            required={{
              required: 'La contraseña es obligatoria',
              minLength: {
                value: 8,
                message: 'La contraseña debe tener al menos 8 caracteres'
              },
              validate: {
                hasUpperCase: value =>
                  /[A-Z]/.test(value) || 'La contraseña debe contener al menos una letra mayúscula',
                hasLowerCase: value =>
                  /[a-z]/.test(value) || 'La contraseña debe contener al menos una letra minúscula',
                hasNumber: value =>
                  /\d/.test(value) || 'La contraseña debe contener al menos un número',
                hasSpecialChar: value =>
                  /[!@#$%^&*(),.?":{}|<>]/.test(value) || 'La contraseña debe contener al menos un carácter especial (!@#$%^&*(),.?":{}|<>)'
              }
            }}
            error={errors.password}
            showPasswordToggle
          />
          <LoginInput
            label='Confirmar Contraseña'
            type='password'
            id='confirm_password'
            placeholder='Confirmar Contraseña'
            register={register}
            required={{
              required: 'La confirmación de la contraseña es obligatoria',
              validate: value => value === password || 'Las contraseñas no coinciden'
            }}
            error={errors.confirm_password}
            showPasswordToggle
          />
          <div className='w-full h-auto flex justify-start items-center lg:w-[70%] '>
            <ButtonSubmit
              className=''
              text={loading ? 'Creando cuenta...' : 'Crear Cuenta'}
              disabled={loading}
            />
          </div>
        </form>
      </main>
      <div className='hidden lg:flex lg:flex-col
       lg:justify-start lg:items-end
       lg:w-[60%] lg:h-full
       lg:rounded-lg lg:bg-gray-100 lg:p-9 lg:gap-8'
      >
        <h1 className='text-secondary font-bold text-4xl'>ConcectaCare</h1>
        <img className=' object-contain rounded-4xl' src='/images/nurse-signup.jpg' alt='' />
      </div>
    </div>
  )
}

export { SignUp }
