import { Header } from '../components/componentsLayout/Header'
import { Footer } from '../components/componentsLayout/Footer'
import { MainPatient } from '../components/componentsPatient/MainPatient'

function Patient () {
  return (
    <div>
      <Header />
      <MainPatient />
      <Footer />
    </div>
  )
}

export { Patient }
