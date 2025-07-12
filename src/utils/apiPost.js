export async function postData (url, data) {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })

  if (!response.ok) {
    const errorText = await response.text()
    console.error('Error response:', {
      status: response.status,
      statusText: response.statusText,
      body: errorText
    })
    throw new Error(`Error ${response.status}: ${errorText}`)
  }

  return response.json()
}
