import { ButtonChoose } from './ButtonChoose'

function PatientBox () {
  return (
    <div className='w-[90%] h-auto flex flex-col justify-center items-start bg-white border-1 border-[#eaeef4] p-3 shadow-xl rounded-lg gap-1 lg:w-[45%]'>
      <h2 className='text-lg font-semibold'>María Gonzales</h2>
      <h3 className='text-md font-medium'>60 años</h3>
      <div className='w-full h-auto flex justify-between items-center gap-5'>
        <ButtonChoose text='Editar' />
        <ButtonChoose text='Elegir' />
      </div>
    </div>
  )
}

export { PatientBox }
