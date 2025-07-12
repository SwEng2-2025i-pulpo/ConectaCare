import { ButtonChoose } from './ButtonChoose'

function PatientBox ({ patient, onEdit, onChoose }) {
  if (!patient) {
    return (
      <div className='w-[90%] h-auto flex flex-col justify-center items-start bg-gray-100 border-1 border-[#eaeef4] p-3 shadow-xl rounded-lg gap-1 lg:w-[45%]'>
        <h2 className='text-lg font-semibold text-gray-500'>Sin datos</h2>
        <h3 className='text-md font-medium text-gray-400'>Cargando...</h3>
      </div>
    )
  }

  const fullName = `${patient.name || ''} ${patient.last_name || ''}`.trim()
  const displayAge = patient.age ? `${patient.age} años` : 'Edad no disponible'
  const displayDocument = patient.document ? `Doc: ${patient.document}` : 'Sin documento'

  return (
    <div className='w-[90%] h-auto flex flex-col justify-center items-start bg-white border-1 border-[#eaeef4] p-3 shadow-xl rounded-lg gap-1 lg:w-[45%]'>
      <h2 className='text-lg font-semibold'>{fullName || 'Nombre no disponible'}</h2>
      <h3 className='text-md font-medium'>{displayAge}</h3>
      <p className='text-sm text-gray-600'>{displayDocument}</p>
      <div className='w-full h-auto flex justify-between items-center gap-5'>
        <ButtonChoose
          text='Editar'
          onClick={() => onEdit && onEdit(patient)}
        />
        <ButtonChoose
          text='Elegir'
          onClick={() => onChoose && onChoose(patient)}
        />
      </div>
    </div>
  )
}

export { PatientBox }
