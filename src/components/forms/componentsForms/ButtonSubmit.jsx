import '../../../style.css'

function ButtonSubmit ({ type, text }) {
  return (
    <div className='w-[90%] h-auto flex justify-center items-center'>
      <button
        className='w-full h-10 text-lg
      font-bold rounded-3xl bg-secondary mt-3
       text-white hover:bg-tertiary hover:text-secondary hover:shadow-2xl cursor-pointer lg:text-sm'
        type={type}
      >{text || 'Enviar'}
      </button>
    </div>
  )
}

export { ButtonSubmit }
