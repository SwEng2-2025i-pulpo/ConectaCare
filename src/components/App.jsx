import '../style.css'
import React, { useState } from 'react'
import { ButtonForm } from './ButtonForm'
import { FoodForms } from './forms/FoodForms'
import { MedicationForms } from './forms/MedicationForms'
import { HygieneForms } from './forms/HygieneForms'
import { NoticeSend } from './NoticeSend'

function App () {
  const [mostrarFormulario, setMostrarFormulario] = useState(false)

  return (
    <>
      <ButtonForm titleForm='Alimentación' id={1} mostrarFormulario={mostrarFormulario} setMostrarFormulario={setMostrarFormulario}>
        <FoodForms>
          <NoticeSend mensaje='¡Alimentación registrada correctamente!' />
        </FoodForms>
      </ButtonForm>
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
