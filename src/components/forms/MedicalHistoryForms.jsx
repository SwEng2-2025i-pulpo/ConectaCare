import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { FormInput } from './componentsForms/FormInput'
import { FormTextarea } from './componentsForms/FormTextarea'
import { ButtonSubmit } from './componentsForms/ButtonSubmit'

function MedicalHistoryForms ({ children, onSubmit, defaultValues }) {
  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm({ defaultValues: defaultValues || {} })

  useEffect(() => {
    reset(defaultValues)
  }, [defaultValues, reset])

  const send = (data) => {
    const dataToSend = {
      ...data,
      date: data.fechaHora ? new Date(data.fechaHora).toISOString() : ''
    }
    onSubmit(dataToSend)
    console.log('Datos enviados:', data)
    reset()
  }

  return (
    <div className='div__form'>
      <form className='form' onSubmit={handleSubmit(send)}>
        <FormInput
          label='Fecha y hora'
          type='datetime-local'
          id='date'
          placeholder='fecha y hora'
          register={register}
          required={{ required: 'La fecha y hora son obligatorios' }}
          error={errors.fechaHora}
        />
        <FormInput
          label='Descripción del síntoma'
          id='description'
          placeholder='Descripción del síntoma'
          register={register}
          required={{ required: 'La descripción es obligatorios' }}
          error={errors.descripcionSintoma}
        />
        <FormTextarea
          label='Observaciones'
          id='notes'
          placeholder='Observaciones'
          register={register}
        />
        <ButtonSubmit tipe='Submit' />
      </form>
      {isSubmitSuccessful && children}
    </div>
  )
}

export { MedicalHistoryForms }
