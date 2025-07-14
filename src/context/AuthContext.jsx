import React, { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  // Verificar si hay un token guardado al cargar la app
  useEffect(() => {
    const token = window.localStorage.getItem('authToken')
    if (token) {
      setIsAuthenticated(true)
      // Aquí podrías hacer una llamada al backend para validar el token
      // y obtener datos del usuario si es necesario
    }
    setLoading(false)
  }, [])

  const login = (userData, token) => {
    if (token) {
      window.localStorage.setItem('authToken', token)
    }
    setUser(userData)
    setIsAuthenticated(true)
  }

  const logout = () => {
    window.localStorage.removeItem('authToken')
    setUser(null)
    setIsAuthenticated(false)
  }

  const value = {
    isAuthenticated,
    user,
    loading,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
