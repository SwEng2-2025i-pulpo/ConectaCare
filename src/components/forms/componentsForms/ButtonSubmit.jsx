import '../../../style.css'

function ButtonSubmit ({ type, text }) {
  return (
    <div className='w-[90%] h-auto flex justify-center items-center'>
      <button
        className='w-[90%] h-10 text-lg
      font-bold rounded-lg bg-secondary mt-3 lg:ml-5
       text-white hover:bg-tertiary hover:text-secondary hover:shadow-2xl cursor-pointer lg:text-sm'
        type={type}
      >{text || 'Enviar'}
      </button>
    </div>
  )
}

export { ButtonSubmit }
