import { PatientBox } from './PatientBox'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getPatients } from '../../utils/apiPatients'
import { usePatient } from '../../context/PatientContext'
import { setSelectedPatient } from '../../utils/selectedPatient'
import { NoticeSend } from '../NoticeSend'

function MainPatient () {
  const navigate = useNavigate()
  const [patients, setPatients] = useState([])
  const [loading, setLoading] = useState(true)
  const [mensaje, setMensaje] = useState('')

  const { startEditing, stopEditing } = usePatient()

  useEffect(() => {
    loadPatients()
  }, [])

  const loadPatients = async () => {
    try {
      setLoading(true)
      const patientsData = await getPatients()
      console.log('Pacientes cargados:', patientsData)
      setPatients(patientsData)
    } finally {
      setLoading(false)
    }
  }

  const handleEditPatient = (patient) => {
    console.log('Editar paciente:', patient)
    startEditing(patient)
    navigate('/configuracion')
  }
  const handleChoosePatient = (patient) => {
    console.log('Paciente seleccionado:', patient)

    // Guardar el paciente seleccionado en localStorage
    setSelectedPatient(patient)

    // Mostrar confirmación al usuario
    setMensaje(`Paciente seleccionado: ${patient.name} ${patient.last_name}`)

    // Opcional: navegar a otra página después de seleccionar
    // navigate('/home')
  }

  const handleCreatePatient = () => {
    // Limpiar el contexto del paciente en edición antes de navegar
    if (stopEditing) {
      stopEditing()
    }
    navigate('/configuracion')
  }

  if (loading) {
    return (
      <main className='mainSettings'>
        <div className='mainSettings__title'>
          <h1 className='mainSettings__h1'>Mis pacientes</h1>
        </div>
        <div className='w-full h-40 flex items-center justify-center'>
          <p className='text-gray-500'>Cargando pacientes...</p>
        </div>
      </main>
    )
  }

  return (
    <main className='mainSettings'>
      {mensaje && <NoticeSend mensaje={mensaje} onClose={() => setMensaje('')} />}

      <div className='mainSettings__title'>
        <h1 className='mainSettings__h1'>Mis pacientes</h1>
        <button
          className='w-[95%] bg-secondary text-white px-4 py-2 rounded-lg hover:bg-gray-100 hover:text-secondary text-sm font-medium transition-colors cursor-pointer lg:w-[30%]'
          onClick={handleCreatePatient}
        >
          Crear Paciente
        </button>
      </div>
      <div className='w-full h-96 overflow-y-auto flex flex-col justify-start items-start gap-5 lg:pl-5 pl-5 rounded-lg lg:w-[95%] lg:flex-row lg:flex-wrap lg:justify-start lg:items-start min-h-40'>
        {patients.length === 0
          ? (
            <div className='w-full h-40 flex items-center justify-center'>
              <p className='text-gray-500'>No hay pacientes registrados</p>
            </div>
            )
          : (
              patients.map((patient, index) => (
                <PatientBox
                  key={patient.id || index}
                  patient={patient}
                  onEdit={handleEditPatient}
                  onChoose={handleChoosePatient}
                />
              ))
            )}
      </div>
    </main>
  )
}

export { MainPatient }
