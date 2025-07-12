export async function putData (url, data) {
  const response = await fetch(url, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })

  if (!response.ok) {
    const errorText = await response.text()
    console.error('Error en PUT request:', {
      status: response.status,
      statusText: response.statusText,
      url,
      body: errorText
    })
    throw new Error(`Error ${response.status}: ${errorText}`)
  }

  return response.json()
}
