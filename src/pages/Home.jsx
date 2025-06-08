import { Header } from '../components/componentsLayout/Header'
import { MainHome } from '../components/componentsLayout/componentsMainLayout/MainHome'
import { Footer } from '../components/componentsLayout/Footer'

function Home () {
  return (
    <div className='flex flex-col gap-5'>
      <Header />
      <MainHome />
      <Footer />
    </div>
  )
}

export { Home }
