import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { FormInput } from './componentsForms/FormInput'
import { FormTextarea } from './componentsForms/FormTextarea'

function MedicalHistoryForms ({ children, onSubmit, defaultValues }) {
  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm({ defaultValues: defaultValues || {} })

  useEffect(() => {
    reset(defaultValues)
  }, [defaultValues, reset])

  const send = (data) => {
    onSubmit(data)
    reset()
  }

  return (
    <div>
      <form onSubmit={handleSubmit(send)}>
        <FormInput
          label='Fecha y hora'
          id='fechaHora'
          placeholder='fecha y hora'
          register={register}
          required={{ required: 'La fecha y hora son obligatorios' }}
          error={errors.fechaHora}
        />
        <FormInput
          label='Descripción del síntoma'
          id='descripcionSintoma'
          placeholder='Descripción del síntoma'
          register={register}
          required={{ required: 'La descripción es obligatorios' }}
          error={errors.descripcionSintoma}
        />
        <FormTextarea
          label='Observaciones'
          id='observaciones'
          placeholder='Observaciones'
          register={register}
        />
        <button type='submit'>Enviar</button>
      </form>
      {isSubmitSuccessful && children}
    </div>
  )
}

export { MedicalHistoryForms }
