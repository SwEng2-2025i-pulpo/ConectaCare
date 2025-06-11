import '../../../style.css'

function FormSelect ({ label, id, register, required, error, options }) {
  return (
    <div className='form-div'>
      <label className='form-div__label' htmlFor={id}>
        {label}
        {required && <span className='form-div__required'> *</span>}
      </label>
      <select
        className='form-div__input px-5 appearance-none
       ' id={id}
        {...register(id, required)}
      >
        {options.map(opt => (
          <option
            style={{
              fontSize: '1rem',
              color: '#173656',
              backgroundColor: '#E0E0E0'
            }}
            key={opt.value} value={opt.value}
          >{opt.label}
          </option>
        ))}
      </select>
      {error && <span className='form-div__error'>{error.message}</span>}
    </div>
  )
}

export { FormSelect }
