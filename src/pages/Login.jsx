import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { LoginInput } from '../components/login/LoginInput'
import { ButtonSubmit } from '../components/forms/componentsForms/ButtonSubmit'
import { MessageAlert } from '../components/MessageAlert'
import { loginUser } from '../utils/apiLogin'

function Login () {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const navigate = useNavigate()
  const { login } = useAuth()

  const onSubmit = async (data) => {
    setLoading(true)
    setMessage('')

    try {
      const loginData = {
        email: data.email.trim().toLowerCase(),
        password: data.password
      }

      const result = await loginUser(loginData)
      console.log('Resultado del login:', result)

      // Como el backend no devuelve token, creamos uno simple o usamos un flag
      const simpleToken = 'authenticated_' + Date.now()

      // Usar el contexto de autenticación para hacer login
      login(result.user || { email: loginData.email }, simpleToken)

      setMessage('¡Inicio de sesión exitoso!')

      // Redireccionar a la página principal
      setTimeout(() => {
        navigate('/')
      }, 1500)
    } catch (error) {
      setMessage(`Error al iniciar sesión: ${error.message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='login__div'>
      <main className='login__main'>
        <h1 className='login-title'>Iniciar Sesión</h1>
        <h3 className='login-subtitle'>¡Hola de nuevo! Qué gusto verte otra vez.
        </h3>

        <MessageAlert message={message} />

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
          <ButtonSubmit
            className='lg:text-7xl'
            text={loading ? 'Ingresando...' : 'Ingresar'}
            disabled={loading}
          />
        </form>
        <div className='flex flex-col items-center gap-4 mt-5 lg:text-sm'>
          <h2>¿Todavía no tienes cuenta?</h2>
          <Link to='/SignUp' className='hover:text-primary hover:font-bold cursor-pointer'>Crear Cuenta</Link>
        </div>
      </main>
    </div>
  )
}

export { Login }
