import '../../../style.css'

function ButtonSubmit ({ type }) {
  return (
    <div className='w-[90%] h-auto flex justify-center items-center'>
      <button
        className='w-full h-10 text-lg
      font-bold rounded-3xl bg-primary
       text-secondary hover:bg-tertiary hover:shadow-2xl cursor-pointer'
        type={type}
      >Enviar
      </button>
    </div>
  )
}

export { ButtonSubmit }
