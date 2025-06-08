import '../../../style.css'

function InfoCard ({ title, text, bg }) {
  return (
    <div
      className='main-img bg-cover bg-center'
      style={{ backgroundImage: `url('${bg}')` }}
    >
      <h3 className='main-img__title'>{title}</h3>
      <p className='main-img__info'>{text}</p>
    </div>
  )
}

export { InfoCard }
