import '../../style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
function Footer () {
  return (
    <footer className='bg-secondary
    w-full h-auto pl-10 flex flex-col
    justify-start items-start text-white text-sm gap-3 pb-15'
    >
      <h3 className='text-lg mt-5 font-bold'>Sobre Nosotros</h3>
      <p>Terminos y condiciones</p>

      <p>Siguenos:</p>
      <div className='flex flex-row gap-3 text-2xl'>
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faXTwitter} />
      </div>
      <p>Por pulpos</p>
      <p>
        © 2025 ConectaCare. <br /> Todos los derechos reservados.
      </p>
    </footer>
  )
}

export { Footer }
