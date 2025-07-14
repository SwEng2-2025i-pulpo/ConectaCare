// export async function createPatient (patientData) {
//   const response = await fetch('/create-patient/', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(patientData)
//   })

//   if (!response.ok) {
//     const errorText = await response.text()
//     console.error('Error creating patient:', {
//       status: response.status,
//       statusText: response.statusText,
//       body: errorText
//     })
//     throw new Error(`Error ${response.status}: ${errorText}`)
//   }

//   return response.json()
// }
export async function createPatient(patientData) {
  const token = localStorage.getItem("token")  // ✅ Obtenemos el token JWT almacenado

  const response = await fetch('/create-patient/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`  // ✅ Incluir el token en el encabezado
    },
    body: JSON.stringify(patientData)
  })

  if (!response.ok) {
    const errorText = await response.text()
    console.error('Error creating patient:', {
      status: response.status,
      statusText: response.statusText,
      body: errorText
    })
    throw new Error(`Error ${response.status}: ${errorText}`)
  }

  return response.json()
}
