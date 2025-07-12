import '../../../style.css'
import { ButtonHome } from './ButtonHome'
import { ButtonLink } from './ButtonLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faEye, faCircleDown, faGear } from '@fortawesome/free-solid-svg-icons'
import { ButtonPdf } from './ButtonPdf'

function StickyActions () {
  const id = '684cadfec42b9cab643ad7a7'

  return (
    <section className='main sticky top-0 p-3 bg-white z-1'>
      <div className='stickyactions__div'>
        <ButtonLink to='/form'>
          <ButtonHome
            titleButton='Registrar cuidado'
            icon={<FontAwesomeIcon icon={faPlus} />}
          />
        </ButtonLink>
        <ButtonLink to='/registros'>
          <ButtonHome
            titleButton='Ver registros'
            icon={<FontAwesomeIcon icon={faEye} />}
          />
        </ButtonLink>
      </div>
      <div className='stickyactions__div'>
        <ButtonPdf
          titleButton='Descargar PDF'
          icon={<FontAwesomeIcon icon={faCircleDown} />}
          patientId={id} // Replace with actual patient ID
        />
        <ButtonLink to='/configuracion'>
          <ButtonHome
            titleButton='Pacientes'
            icon={<FontAwesomeIcon icon={faGear} />}
          />
        </ButtonLink>
      </div>
    </section>
  )
}

export { StickyActions }
