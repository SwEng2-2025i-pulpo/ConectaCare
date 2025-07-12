import { PatientBox } from './PatientBox'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getPatients } from '../../utils/apiPatients'
import { usePatient } from '../../context/PatientContext'

function MainPatient () {
  const [patients, setPatients] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { startEditing } = usePatient()

  useEffect(() => {
    loadPatients()
  }, [])

  const loadPatients = async () => {
    try {
      setLoading(true)
      setError('')
      const patientsData = await getPatients()
      console.log('Pacientes cargados:', patientsData)
      setPatients(patientsData)
    } catch (error) {
      console.error('Error cargando pacientes:', error)
      setError('Error al cargar los pacientes: ' + error.message)
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
    // Aquí puedes agregar la lógica para cuando se selecciona un paciente
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

  if (error) {
    return (
      <main className='mainSettings'>
        <div className='mainSettings__title'>
          <h1 className='mainSettings__h1'>Mis pacientes</h1>
        </div>
        <div className='w-full h-40 flex items-center justify-center flex-col gap-2'>
          <p className='text-red-500'>{error}</p>
          <button
            onClick={loadPatients}
            className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
          >
            Intentar de nuevo
          </button>
        </div>
      </main>
    )
  }

  return (
    <main className='mainSettings'>
      <div className='mainSettings__title'>
        <h1 className='mainSettings__h1'>Mis pacientes</h1>
      </div>
      <div className='w-full h-auto flex flex-col justify-center items-start gap-5 lg:pl-5 pl-5 rounded-lg lg:w-[95%] lg:flex-row min-h-40'>
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
