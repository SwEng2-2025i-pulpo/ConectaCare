import '../style.css'
import React, { useState } from 'react'
import { ButtonForm } from './forms/componentsForms/ButtonForm'
import { FoodForms } from './forms/FoodForms'
import { MedicationForms } from './forms/MedicationForms'
import { HygieneForms } from './forms/HygieneForms'
import { NoticeSend } from './forms/componentsForms/NoticeSend'

function App () {
  const [mostrarFormulario, setMostrarFormulario] = useState(false)
  const [registros, setRegistros] = useState([])

  const agregarRegistro = (registro) => {
    setRegistros([...registros, registro])
  }

  return (
    <>
      <ButtonForm titleForm='Alimentación' id={1} mostrarFormulario={mostrarFormulario} setMostrarFormulario={setMostrarFormulario}>
        <FoodForms onSubmit={agregarRegistro}>
          <NoticeSend mensaje='¡Alimentación registrada correctamente!' />
        </FoodForms>
      </ButtonForm>
      <ul>
        {registros.map((r, i) => (
          <li key={i}>
            {r.fechaHora} - {r.comidaDelDia} - {r.descripcionAlimento}
          </li>
        ))}
      </ul>

      <ButtonForm titleForm='xd' id={2} mostrarFormulario={mostrarFormulario} setMostrarFormulario={setMostrarFormulario}>
        <MedicationForms>
          <NoticeSend mensaje='¡Medicación registrada correctamente!' />
        </MedicationForms>
      </ButtonForm>

      <ButtonForm titleForm='Higiene' id={3} mostrarFormulario={mostrarFormulario} setMostrarFormulario={setMostrarFormulario}>
        <HygieneForms>
          <NoticeSend mensaje='¡Higiene registrada correctamente!' />
        </HygieneForms>
      </ButtonForm>
    </>
  )
}

export default App
