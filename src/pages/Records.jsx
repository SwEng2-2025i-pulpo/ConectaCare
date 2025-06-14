import { useState } from 'react'
import { ViewEditRecords } from '../components/componentsRecord/ViewEditRecords'
import { FoodForms } from '../components/forms/FoodForms'
import { MedicationForms } from '../components/forms/MedicationForms'
import { HygieneForms } from '../components/forms/HygieneForms'
import { MonitoringForms } from '../components/forms/MonitoringForms'
import { MedicalHistoryForms } from '../components/forms/MedicalHistoryForms'

import { Header } from '../components/componentsLayout/Header'
import { StickyActions } from '../components/componentsLayout/componentsPages/StickyActions'
import { Footer } from '../components/componentsLayout/Footer'

function Records ({
  registrosComida,
  setRegistrosComida,
  registrosMedicacion,
  setRegistrosMedicacion,
  registrosHigiene,
  setRegistrosHigiene,
  registrosMonitoreo,
  setRegistrosMonitoreo,
  registrosHistoriaMedica,
  setRegistrosHistoriaMedica
}) {
  const [editando, setEditando] = useState(null)
  const id = '684cadfec42b9cab643ad7a7'

  // const endPointGetFood = `http://127.0.0.1:8000/patients/${id}/meals`
  // const endPointGetMedication = `http://127.0.0.1:8000/patients/${id}/medication_logs`
  // const endPointGetHygiene = `http://127.0.0.1:8000/patients/${id}/hygiene_logs`
  // const endPointGetMonitoring = `http://127.0.0.1:8000/patients/${id}/vital_signs`
  const endPointGetMedicalHistory = `http://127.0.0.1:8000/patients/${id}/medical_history`

  return (
    <div className='div-main'>
      <Header />
      <StickyActions />
      <main className='min-h-100'>
        <h2 className='main-title'>Registros de Cuidados</h2>
        <ViewEditRecords
          registros={registrosComida || []}
          setRegistros={setRegistrosComida}
          comunicado='Formulario de comida actualizado'
          FormComponent={FoodForms}
          camposMostrar={['datetime',
            'meal_type',
            'description',
            'hydration',
            'observations']}
          editando={editando}
          setEditando={setEditando}
          tipo='comida'
          // endPoint={endPointGetFood}
        />
        <ViewEditRecords
          registros={registrosMedicacion || []}
          setRegistros={setRegistrosMedicacion}
          comunicado='Formulario de medicación actualizado'
          FormComponent={MedicationForms}
          camposMostrar={['datetime',
            'medication_name',
            'dose',
            'route',
            'status',
            'observations']}
          editando={editando}
          setEditando={setEditando}
          tipo='medicacion'
          // endPoint={endPointGetMedication}
        />
        <ViewEditRecords
          registros={registrosHigiene || []}
          setRegistros={setRegistrosHigiene}
          comunicado='Formulario de Higiene actualizado'
          FormComponent={HygieneForms}
          camposMostrar={['datetime',
            'type',
            'condition',
            'status',
            'assistance_level',
            'observations']}
          editando={editando}
          setEditando={setEditando}
          tipo='higiene'
          // endPoint={endPointGetHygiene}
        />
        <ViewEditRecords
          registros={registrosMonitoreo || []}
          setRegistros={setRegistrosMonitoreo}
          comunicado='Formulario de Monitoreo actualizado'
          FormComponent={MonitoringForms}
          camposMostrar={['datetime',
            'blood_pressure',
            'heart_rate',
            'observaciones']}
          editando={editando}
          setEditando={setEditando}
          tipo='Monitoreo'
          // endPoint={endPointGetMonitoring}
        />
        <ViewEditRecords
          registros={registrosHistoriaMedica || []}
          setRegistros={setRegistrosHistoriaMedica}
          comunicado='Formulario de Historia medica actualizado'
          FormComponent={MedicalHistoryForms}
          camposMostrar={['date',
            'description',
            'notes']}
          editando={editando}
          setEditando={setEditando}
          tipo='historiaMedica'
          endPoint={endPointGetMedicalHistory}
        />
      </main>
      <Footer />
    </div>
  )
}

export { Records }
