import '../style.css'
import React, { useState } from 'react'
import { ButtonForm } from '../components/forms/componentsForms/ButtonForm'
import { NoticeSend } from '../components/forms/componentsForms/NoticeSend'
import { FoodForms } from '../components/forms/FoodForms'
import { MedicationForms } from '../components/forms/MedicationForms'
import { HygieneForms } from '../components/forms/HygieneForms'
import { MonitoringForms } from '../components/forms/MonitoringForms'
import { MedicalHistoryForms } from '../components/forms/MedicalHistoryForms'

function Form ({
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
  const [mostrarFormulario, setMostrarFormulario] = useState(false)

  const agregarRegistroComida = (registro) => {
    setRegistrosComida([...registrosComida, registro])
  }

  const agregarRegistroMedicacion = (registro) => {
    setRegistrosMedicacion([...registrosMedicacion, registro])
  }

  const agregarRegistroHigiene = (registro) => {
    setRegistrosHigiene([...registrosHigiene, registro])
  }

  const agregarRegistroMonitoreo = (registro) => {
    setRegistrosMonitoreo([...registrosMonitoreo, registro])
  }
  const agregarRegistroHistoriaMedica = (registro) => {
    setRegistrosHistoriaMedica([...registrosHistoriaMedica, registro])
  }

  return (
    <div>
      <h2>Registrar Cuidados</h2>
      <ButtonForm titleForm='Alimentación' id={1} mostrarFormulario={mostrarFormulario} setMostrarFormulario={setMostrarFormulario}>
        <FoodForms onSubmit={agregarRegistroComida}>
          <NoticeSend mensaje='¡Alimentación registrada correctamente!' />
        </FoodForms>
      </ButtonForm>

      <ButtonForm titleForm='Medicación' id={2} mostrarFormulario={mostrarFormulario} setMostrarFormulario={setMostrarFormulario}>
        <MedicationForms onSubmit={agregarRegistroMedicacion}>
          <NoticeSend mensaje='¡Medicación registrada correctamente!' />
        </MedicationForms>
      </ButtonForm>

      <ButtonForm titleForm='Higiene' id={3} mostrarFormulario={mostrarFormulario} setMostrarFormulario={setMostrarFormulario}>
        <HygieneForms onSubmit={agregarRegistroHigiene}>
          <NoticeSend mensaje='¡Higiene registrada correctamente!' />
        </HygieneForms>
      </ButtonForm>

      <ButtonForm titleForm='Monitoreo' id={4} mostrarFormulario={mostrarFormulario} setMostrarFormulario={setMostrarFormulario}>
        <MonitoringForms onSubmit={agregarRegistroMonitoreo}>
          <NoticeSend mensaje='¡Monitoreo registrado correctamente!' />
        </MonitoringForms>
      </ButtonForm>

      <ButtonForm titleForm='Historia medica' id={5} mostrarFormulario={mostrarFormulario} setMostrarFormulario={setMostrarFormulario}>
        <MedicalHistoryForms onSubmit={agregarRegistroHistoriaMedica}>
          <NoticeSend mensaje='¡Historia medica registrada correctamente!' />
        </MedicalHistoryForms>
      </ButtonForm>
    </div>
  )
}

export { Form }
