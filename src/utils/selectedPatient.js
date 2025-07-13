// Utilidad para manejar el paciente seleccionado en localStorage

const SELECTED_PATIENT_KEY = 'selectedPatient'

// Verificar si localStorage está disponible
const isLocalStorageAvailable = () => {
  try {
    return typeof window !== 'undefined' && window.localStorage
  } catch {
    return false
  }
}

export const setSelectedPatient = (patient) => {
  if (!isLocalStorageAvailable()) {
    console.warn('localStorage no está disponible')
    return
  }

  try {
    window.localStorage.setItem(SELECTED_PATIENT_KEY, JSON.stringify(patient))
    console.log('Paciente seleccionado guardado:', patient)
  } catch (error) {
    console.error('Error al guardar paciente seleccionado:', error)
  }
}

export const getSelectedPatient = () => {
  if (!isLocalStorageAvailable()) {
    return null
  }

  try {
    const patientData = window.localStorage.getItem(SELECTED_PATIENT_KEY)
    return patientData ? JSON.parse(patientData) : null
  } catch (error) {
    console.error('Error al obtener paciente seleccionado:', error)
    return null
  }
}

export const getSelectedPatientId = () => {
  const patient = getSelectedPatient()
  return patient?.id || null
}

export const clearSelectedPatient = () => {
  if (!isLocalStorageAvailable()) {
    return
  }

  try {
    window.localStorage.removeItem(SELECTED_PATIENT_KEY)
    console.log('Paciente seleccionado eliminado del localStorage')
  } catch (error) {
    console.error('Error al eliminar paciente seleccionado:', error)
  }
}

export const hasSelectedPatient = () => {
  return getSelectedPatient() !== null
}

export const getSelectedPatientName = () => {
  const patient = getSelectedPatient()
  if (!patient) return null

  const fullName = `${patient.name || ''} ${patient.last_name || ''}`.trim()
  return fullName || 'Nombre no disponible'
}
