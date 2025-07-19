// Función para obtener todos los pacientes
export const getPatients = async () => {
  try {
    const token = localStorage.getItem('token')  // Asegúrate que lo guardaste en el login

    const response = await fetch('/create-patient/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`  // <-- Token JWT aquí para el header de la petición get
      }
    })
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`)
    }

    const data = await response.json()
    console.log('Pacientes obtenidos:', data)

    // Log detallado para depurar el formato de fecha
    if (data && data.length > 0) {
      console.log('Primer paciente:', data[0])
      console.log('Campos disponibles:', Object.keys(data[0]))
      console.log('Fecha de nacimiento del primer paciente:', data[0].birth_date)
      console.log('Tipo de fecha:', typeof data[0].birth_date)

      // Verificar si hay otros campos relacionados con fecha
      Object.keys(data[0]).forEach(key => {
        if (key.includes('birth') || key.includes('date') || key.includes('fecha')) {
          console.log(`Campo relacionado con fecha encontrado: ${key} =`, data[0][key])
        }
      })
    }

    return data
  } catch (error) {
    console.error('Error al obtener pacientes:', error)
    throw error
  }
}

// Función para actualizar un paciente
export const updatePatient = async (patientId, patientData) => {
  try {
    const response = await fetch(`/create-patient/${patientId}/edit_patient`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(patientData)
    })

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`)
    }

    const data = await response.json()
    console.log('Paciente actualizado:', data)
    return data
  } catch (error) {
    console.error('Error al actualizar paciente:', error)
    throw error
  }
}
