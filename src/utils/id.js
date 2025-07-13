import { getSelectedPatientId } from './selectedPatient.js'

// ID por defecto en caso de que no haya paciente seleccionado
const DEFAULT_ID = '6871a921d7e09f4bec1f14bb'

// Obtener el ID del paciente seleccionado o usar el ID por defecto
export const id = getSelectedPatientId() || DEFAULT_ID

// Función para obtener el ID actual (útil para obtener el ID actualizado)
export const getCurrentPatientId = () => {
  return getSelectedPatientId() || DEFAULT_ID
}
