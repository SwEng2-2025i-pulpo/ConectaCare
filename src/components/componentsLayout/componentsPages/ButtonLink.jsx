import { Link } from 'react-router-dom'
import '../../../style.css'

function ButtonLink ({ to, children, className = '', ...props }) {
  return (
    <Link
      to={to}
      className={`w-[45%] flex justify-center ${className}`}
      {...props}
    >
      {children}
    </Link>
  )
}

export { ButtonLink }
