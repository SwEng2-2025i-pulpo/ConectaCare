// Utilidad para login de usuarios

export const loginUser = async (loginData) => {
  const response = await fetch('/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(loginData)
  })

  if (!response.ok) {
    let errorMessage = `Error ${response.status}: ${response.statusText}`

    try {
      const errorData = await response.json()
      // Si el servidor devuelve un mensaje de error específico, usarlo
      if (errorData.detail) {
        errorMessage = Array.isArray(errorData.detail)
          ? errorData.detail.map(err => `${err.loc?.join('.')} - ${err.msg}`).join(', ')
          : errorData.detail
      } else if (errorData.message) {
        errorMessage = errorData.message
      }
    } catch (jsonError) {
      // Si no se puede parsear el JSON, usar el mensaje de estado HTTP
    }

    throw new Error(errorMessage)
  }

  const data = await response.json()
  return data
}
