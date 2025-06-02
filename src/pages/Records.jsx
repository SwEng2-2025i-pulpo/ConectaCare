import { useState } from 'react'
import { ViewEditRecords } from '../components/componentsRecord/ViewEditRecords'
import { FoodForms } from '../components/forms/FoodForms'
import { MedicationForms } from '../components/forms/MedicationForms'
import { HygieneForms } from '../components/forms/HygieneForms'
import { MonitoringForms } from '../components/forms/MonitoringForms'
import { MedicalHistoryForms } from '../components/forms/MedicalHistoryForms'

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

  return (
    <div>
      <h2>Registros de Cuidados</h2>
      <ViewEditRecords
        registros={registrosComida || []}
        setRegistros={setRegistrosComida}
        comunicado='Formulario de comida actualizado'
        FormComponent={FoodForms}
        camposMostrar={['fechaHora',
          'comidaDelDia',
          'descripcionAlimento',
          'observaciones']}
        editando={editando}
        setEditando={setEditando}
        tipo='comida'
      />
      <ViewEditRecords
        registros={registrosMedicacion || []}
        setRegistros={setRegistrosMedicacion}
        comunicado='Formulario de medicación actualizado'
        FormComponent={MedicationForms}
        camposMostrar={['fechaHora',
          'nombreMedicamento',
          'dosisAdministrada',
          'estadoCumplimiento',
          'viaAdministracion',
          'observaciones']}
        editando={editando}
        setEditando={setEditando}
        tipo='medicacion'
      />
      <ViewEditRecords
        registros={registrosHigiene || []}
        setRegistros={setRegistrosHigiene}
        comunicado='Formulario de Higiene actualizado'
        FormComponent={HygieneForms}
        camposMostrar={['fechaHora',
          'tipoHigiene',
          'condicionPersona',
          'estadoCumplimiento',
          'nivelAsistencia',
          'observaciones']}
        editando={editando}
        setEditando={setEditando}
        tipo='higiene'
      />
      <ViewEditRecords
        registros={registrosMonitoreo || []}
        setRegistros={setRegistrosMonitoreo}
        comunicado='Formulario de Monitoreo actualizado'
        FormComponent={MonitoringForms}
        camposMostrar={['fechaHora',
          'pesoKg',
          'presionSanguinea',
          'frecuenciaCardiaca',
          'observaciones']}
        editando={editando}
        setEditando={setEditando}
        tipo='Monitoreo'
      />
      <ViewEditRecords
        registros={registrosHistoriaMedica || []}
        setRegistros={setRegistrosHistoriaMedica}
        comunicado='Formulario de Historia medica actualizado'
        FormComponent={MedicalHistoryForms}
        camposMostrar={['fechaHora',
          'descripcionSintoma',
          'observaciones']}
        editando={editando}
        setEditando={setEditando}
        tipo='historiaMedica'
      />
    </div>
  )
}

export { Records }
