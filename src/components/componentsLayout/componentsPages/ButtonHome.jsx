import '../../../style.css'

function ButtonHome ({ titleButton, icon }) {
  return (
    <button className='stickyactions__button'>
      {icon}
      {titleButton}
    </button>
  )
}

export { ButtonHome }
