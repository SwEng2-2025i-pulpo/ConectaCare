import React from 'react'
import { useForm } from 'react-hook-form'
import { LoginInput } from '../components/login/LoginInput'
import { ButtonSubmit } from '../components/forms/componentsForms/ButtonSubmit'

function SignUp () {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    console.log('Datos del login:', data)
    // Aquí iría tu lógica de autenticación
  }

  return (
    <div className='signup__div'>
      <main className='signup__main'>
        <div className='signup__h1__div'>
          <h1 className='login-title'>Crear Cuenta</h1>
          <h3 className='login-subtitle'>Crea una nueva cuenta
          </h3>
        </div>
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
            id='lastName'
            placeholder='Apellido Cuidador'
            register={register}
            required={{ required: 'El apellido es obligatorio' }}
            error={errors.lastName}
          />
          <LoginInput
            label='Email Cuidador'
            type='email'
            id='email'
            placeholder='Email'
            register={register}
            required={{ required: 'El email es obligatorio' }}
            error={errors.email}
          />
          <LoginInput
            label='Contraseña'
            type='password'
            id='password'
            placeholder='Contraseña'
            register={register}
            required={{ required: 'La contraseña es obligatoria' }}
            error={errors.password}
            showPasswordToggle
          />
          <LoginInput
            label='Confirmar Contraseña'
            type='password'
            id='password'
            placeholder='Contraseña'
            register={register}
            required={{ required: 'La confirmación de la contraseña es obligatoria' }}
            error={errors.password}
            showPasswordToggle
          />
          <ButtonSubmit className='lg:text-7xl' text='Crear Cuenta' />
        </form>
      </main>
      <div className='hidden lg:flex lg:flex-col
       lg:justify-start lg:items-end
       lg:w-[60%] lg:h-[95%]
       lg:rounded-lg lg:bg-gray-100 pr-7'
      >
        <h1 className='text-secondary font-bold text-4xl pb-12'>ConcectaCare</h1>
        <img className='w-[95%] object-contain rounded-4xl' src='/images/nurse-signup.jpg' alt='' />
      </div>
    </div>
  )
}

export { SignUp }
