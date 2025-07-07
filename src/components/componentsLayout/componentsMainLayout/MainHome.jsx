import '../../../style.css'
import { StickyActions } from '../componentsPages/StickyActions'
import { InfoCard } from '../componentsPages/InfoCard'

function MainHome () {
  return (
    <main className='main'>
      <StickyActions />
      <section className='main'>
        <h2 className='main-title'>Bienvenido a ConectaCare</h2>
        {/* No se pudo usar main porque no deja usar grid porque se sobreescribe */}
        <div className='w-full h-auto flex flex-col justify-center items-center gap-5 lg:w-[90%] lg:grid lg:grid-cols-2 lg:grid-rows-2'>
          <InfoCard
            className='lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2'
            title='ConectaCare'
            text='Gestión apropiada para tus cuidados'
            bg='/images/nurse.jpg'
          />
          <InfoCard
            className='lg:col-start-1 lg:col-end-2 lg:col-row-2 lg:row-end-3'
            title='Registra'
            text='Tus cuidados en segundos'
            bg='/images/record.jpg'
          />
          <InfoCard
            className='lg:col-start-2 lg:col-end-3 lg:col-row-2 lg:row-end-3'
            title='Consulta'
            text={
              <>
                Historial siempre<br />
                disponible
              </>
}
            bg='/images/consultation.jpg'
          />
        </div>
      </section>
    </main>
  )
}

export { MainHome }
