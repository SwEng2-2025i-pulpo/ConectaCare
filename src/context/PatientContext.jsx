import { createContext, useContext, useState } from 'react'

const PatientContext = createContext()

export function PatientProvider ({ children }) {
  const [patientToEdit, setPatientToEdit] = useState(null)
  const [isEditingMode, setIsEditingMode] = useState(false)

  const startEditing = (patient) => {
    setPatientToEdit(patient)
    setIsEditingMode(true)
  }

  const stopEditing = () => {
    setPatientToEdit(null)
    setIsEditingMode(false)
  }

  const value = {
    patientToEdit,
    isEditingMode,
    startEditing,
    stopEditing
  }

  return (
    <PatientContext.Provider value={value}>
      {children}
    </PatientContext.Provider>
  )
}

export function usePatient () {
  const context = useContext(PatientContext)
  if (!context) {
    throw new Error('usePatient must be used within a PatientProvider')
  }
  return context
}
