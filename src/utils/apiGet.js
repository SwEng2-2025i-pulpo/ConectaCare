export async function getData (url) {
  const response = await fetch(url)
  const contentType = response.headers.get('content-type')?.toLowerCase()

  if (!response.ok) {
    // Intenta leer el mensaje de error del backend si es JSON
    if (contentType && contentType.includes('application/json')) {
      const errorData = await response.json()
      throw new Error(errorData.message || 'Error en la petición')
    }
    throw new Error('Error en la petición')
  }

  // if (!contentType || !contentType.includes('application/json')) {
  //   throw new Error('La respuesta no es JSON')
  // }

  // Si la respuesta está vacía, regresa null o un objeto vacío
  const text = await response.text()
  return text ? JSON.parse(text) : null
}
