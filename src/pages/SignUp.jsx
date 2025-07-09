import React from 'react'
import { useForm } from 'react-hook-form'
import { LoginInput } from '../components/login/LoginInput'
import { ButtonSubmit } from '../components/forms/componentsForms/ButtonSubmit'

function SignUp () {
  const { register, handleSubmit, watch, formState: { errors } } = useForm()

  // Observar el valor del campo password
  const password = watch('password')

  const onSubmit = (data) => {
    console.log('Datos del registro:', data)
    // Aquí iría tu lógica de registro
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
            id='confirmPassword'
            placeholder='Confirmar Contraseña'
            register={register}
            required={{
              required: 'La confirmación de la contraseña es obligatoria',
              validate: value => value === password || 'Las contraseñas no coinciden'
            }}
            error={errors.confirmPassword}
            showPasswordToggle
          />
          <div className='w-full h-auto flex justify-start items-center lg:w-[70%] '>
            <ButtonSubmit className='' text='Crear Cuenta' />
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
