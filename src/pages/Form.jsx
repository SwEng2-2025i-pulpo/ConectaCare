import '../style.css'
import React, { useState } from 'react'
import { ButtonForm } from '../components/forms/componentsForms/ButtonForm'
import { NoticeSend } from '../components/NoticeSend'
import { FoodForms } from '../components/forms/FoodForms'
import { MedicationForms } from '../components/forms/MedicationForms'
import { HygieneForms } from '../components/forms/HygieneForms'
import { MonitoringForms } from '../components/forms/MonitoringForms'
import { MedicalHistoryForms } from '../components/forms/MedicalHistoryForms'

import { Header } from '../components/componentsLayout/Header'
import { StickyActions } from '../components/componentsLayout/componentsPages/StickyActions'
import { Footer } from '../components/componentsLayout/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils, faSuitcaseMedical, faPumpMedical, faStethoscope, faNotesMedical } from '@fortawesome/free-solid-svg-icons'

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
    <div className='div-main'>
      <Header />
      <StickyActions />
      <main className='div-main'>
        <h2 className='main-title'>Registrar Cuidados</h2>
        <ButtonForm
          titleForm='Alimentación' id={1} mostrarFormulario={mostrarFormulario}
          setMostrarFormulario={setMostrarFormulario}
          icon={<FontAwesomeIcon icon={faUtensils} />}
        >
          <FoodForms onSubmit={agregarRegistroComida}>
            <NoticeSend mensaje='¡Alimentación registrada correctamente!' />
          </FoodForms>
        </ButtonForm>

        <ButtonForm
          titleForm='Medicación' id={2} mostrarFormulario={mostrarFormulario}
          setMostrarFormulario={setMostrarFormulario}
          icon={<FontAwesomeIcon icon={faSuitcaseMedical} />}
        >
          <MedicationForms onSubmit={agregarRegistroMedicacion}>
            <NoticeSend mensaje='¡Medicación registrada correctamente!' />
          </MedicationForms>
        </ButtonForm>

        <ButtonForm
          titleForm='Higiene' id={3} mostrarFormulario={mostrarFormulario}
          setMostrarFormulario={setMostrarFormulario}
          icon={<FontAwesomeIcon icon={faPumpMedical} />}
        >
          <HygieneForms
            onSubmit={agregarRegistroHigiene}
          >
            <NoticeSend mensaje='¡Higiene registrada correctamente!' />
          </HygieneForms>
        </ButtonForm>

        <ButtonForm
          titleForm='Monitoreo' id={4} mostrarFormulario={mostrarFormulario}
          setMostrarFormulario={setMostrarFormulario}
          icon={<FontAwesomeIcon icon={faStethoscope} />}
        >
          <MonitoringForms onSubmit={agregarRegistroMonitoreo}>
            <NoticeSend mensaje='¡Monitoreo registrado correctamente!' />
          </MonitoringForms>
        </ButtonForm>

        <ButtonForm
          titleForm='Historia medica' id={5} mostrarFormulario={mostrarFormulario}
          setMostrarFormulario={setMostrarFormulario}
          icon={<FontAwesomeIcon icon={faNotesMedical} />}
        >
          <MedicalHistoryForms onSubmit={agregarRegistroHistoriaMedica}>
            <NoticeSend mensaje='¡Historia medica registrada correctamente!' />
          </MedicalHistoryForms>
        </ButtonForm>
      </main>
      <Footer />
    </div>
  )
}

export { Form }
