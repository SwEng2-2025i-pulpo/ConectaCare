import '../../../style.css'
import { ButtonHome } from './ButtonHome'
import { ButtonLink } from './ButtonLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faEye } from '@fortawesome/free-solid-svg-icons'

function StickyActions () {
  return (
    <section className='flex flex-row justify-center items-center gap-5 w-full h-auto sticky top-0 p-3 bg-white'>
      <ButtonLink to='/form'>
        <ButtonHome
          titleButton='Nuevo cuidado'
          icon={<FontAwesomeIcon icon={faPlus} />}
        />
      </ButtonLink>
      <ButtonLink to='/registros'>
        <ButtonHome
          titleButton='Registro'
          icon={<FontAwesomeIcon icon={faEye} />}
        />
      </ButtonLink>
    </section>
  )
}

export { StickyActions }
