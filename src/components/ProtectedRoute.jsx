import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Login } from '../pages/Login'

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth()

  // Mostrar loading mientras verificamos la autenticación
  if (loading) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <div className='text-xl font-semibold'>Cargando...</div>
      </div>
    )
  }

  // Si no está autenticado, mostrar el login
  if (!isAuthenticated) {
    return <Login />
  }

  // Si está autenticado, mostrar el contenido protegido
  return children
}

export { ProtectedRoute }
