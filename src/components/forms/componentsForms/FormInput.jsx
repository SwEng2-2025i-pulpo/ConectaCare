import '../../../style.css'

function FormInput ({ label, id, register, required, error, ...props }) {
  return (
    <div className='form-div'>
      <label className='form-div__label' htmlFor={id}>
        {label}
        {required && <span className='form-div__required'> *</span>}
      </label>
      <input
        className='form-div__input
        '
        id={id} {...register(id, required)}
        {...props}
      />
      {error && <span className='form-div__error'>{error.message}</span>}
    </div>
  )
}

export { FormInput }
