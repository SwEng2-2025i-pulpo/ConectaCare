import '../../../style.css'

function ButtonHome ({ titleButton, icon }) {
  return (
    <button
      className='
        w-full h-12 flex flex-row justify-center items-center gap-1
        p-2 text-secondary text-sm font-extrabold
        border-1 border-solid border-secondary rounded-xl
      '
    >
      {icon}
      {titleButton}
    </button>
  )
}

export { ButtonHome }
