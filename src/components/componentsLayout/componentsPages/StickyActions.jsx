import '../../../style.css'
import { ButtonHome } from './ButtonHome'
import { ButtonLink } from './ButtonLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faEye, faCircleDown, faUser } from '@fortawesome/free-solid-svg-icons'
import { ButtonPdf } from './ButtonPdf'
import { getCurrentPatientId } from '../../../utils/id.js'

function StickyActions () {
  const patientId = getCurrentPatientId()

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
          patientId={patientId}
        />
        <ButtonLink to='/paciente'>
          <ButtonHome
            titleButton='Pacientes'
            icon={<FontAwesomeIcon icon={faUser} />}
          />
        </ButtonLink>
      </div>
    </section>
  )
}

export { StickyActions }
