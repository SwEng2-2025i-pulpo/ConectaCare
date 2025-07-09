import { useForm } from 'react-hook-form'
import { LoginInput } from '../components/login/LoginInput'
import { ButtonSubmit } from '../components/forms/componentsForms/ButtonSubmit'
import { Link } from 'react-router-dom'

function Login () {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    console.log('Datos del login:', data)
    // Aquí iría tu lógica de autenticación
  }

  return (
    <div className='login__div'>
      <main className='login__main'>
        <h1 className='login-title'>Iniciar Sesión</h1>
        <h3 className='login-subtitle'>¡Hola de nuevo! Qué gusto verte otra vez.
        </h3>
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
          <LoginInput
            label='Email'
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
          {/* <ButtonSubmit className='lg:text-7xl' text='Ingresar' /> */}
        </form>
        <ButtonSubmit className='lg:text-7xl' text='Ingresar' />
        <div className='flex flex-col items-center gap-4 mt-5 lg:text-sm'>
          <h2>¿Todavía no tienes cuenta?</h2>
          <Link to='/SignUp' className='hover:text-primary hover:font-bold cursor-pointer'>Crear Cuenta</Link>
        </div>
      </main>
    </div>
  )
}

export { Login }
