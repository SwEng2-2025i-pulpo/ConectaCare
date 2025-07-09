import { PatientBox } from './PatientBox'
function MainPatient () {
  return (
    <main className='mainSettings '>
      <div className='mainSettings__title'>
        <h1 className='mainSettings__h1'>Mis pacientes</h1>
      </div>
      <div className='w-full h-auto flex flex-col justify-center items-start gap-5 lg:pl-5 pl-5 rounded-lg lg:w-[95%] lg:flex-row min-h-40 '>
        <PatientBox />
        <PatientBox />
      </div>
    </main>
  )
}

export { MainPatient }
