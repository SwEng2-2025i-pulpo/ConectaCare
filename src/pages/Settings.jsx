import { Header } from '../components/componentsLayout/Header'
import { Footer } from '../components/componentsLayout/Footer'
import { MainSettings } from '../components/componentsSettings/MainSettings'
import { usePatient } from '../context/PatientContext'

function Settings () {
  const { patientToEdit, stopEditing } = usePatient()

  const handleUpdateSuccess = () => {
    console.log('Paciente actualizado con éxito')
    stopEditing()
  }

  return (
    <div>
      <Header />
      <MainSettings
        patientToEdit={patientToEdit}
        onUpdateSuccess={handleUpdateSuccess}
      />
      <Footer />
    </div>
  )
}

export { Settings }
