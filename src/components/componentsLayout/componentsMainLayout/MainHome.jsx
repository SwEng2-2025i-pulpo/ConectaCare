import '../../../style.css'
import { StickyActions } from '../componentsPages/StickyActions'
import { InfoCard } from '../componentsPages/InfoCard'

function MainHome () {
  return (
    <main className='w-full h-auto flex flex-col justify-center items-center gap-6'>
      <StickyActions />
      <section className='w-full h-auto flex flex-col gap-7'>
        <h2 className='ml-9 text-secondary text-lg font-bold'>Bienvenio a ConectaCare</h2>
        <div className='w-full h-auto  flex flex-col justify-center items-center gap-5'>
          <InfoCard
            title='ConectaCare'
            text='Gestión apropiada para tus cuidados'
            bg='/images/nurse.jpg'
          />
          <InfoCard
            title='Registra'
            text='Tus cuidados en segundos'
            bg='/images/record.jpg'
          />
          <InfoCard
            title='Consulta'
            text='Historial siempre disponible'
            bg='/images/consultation.jpg'
          />
        </div>
      </section>
    </main>
  )
}

export { MainHome }
