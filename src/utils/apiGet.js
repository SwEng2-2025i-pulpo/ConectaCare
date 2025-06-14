export async function getData (url) {
  const response = await fetch(url)
  const text = await response.text()
  try {
    return text ? JSON.parse(text) : null
  } catch (e) {
    console.error('Respuesta inesperada:', text)
    throw new Error('La respuesta no es JSON')
  }
}
