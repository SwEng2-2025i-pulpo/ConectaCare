import '../../style.css'

function FormSelect ({ label, id, register, required, error, options }) {
  return (
    <div>
      <label htmlFor={id}>
        {label}
        {required && <span className='text-red-600'>*</span>}
      </label>
      <select id={id} {...register(id, required)}>
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      {error && <span>{error.message}</span>}
    </div>
  )
}

export { FormSelect }
