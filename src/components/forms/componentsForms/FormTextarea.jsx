import '../../../style.css'

function FormTextarea ({ label, id, register, error, ...props }) {
  return (
    <div className='form-div'>
      <label className='form-div__label' htmlFor={id}>{label}</label>
      <textarea className='w-[90%] h-35 rounded-2xl p-2 bg-[#f1f1fb]' id={id} {...register(id)} {...props} />
    </div>
  )
}

export { FormTextarea }
