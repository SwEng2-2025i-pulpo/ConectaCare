import '../../../style.css'

function FormTextarea ({ label, id, register, error, ...props }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <textarea id={id} {...register(id)} {...props} />
    </div>
  )
}

export { FormTextarea }
