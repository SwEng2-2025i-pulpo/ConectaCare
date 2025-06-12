import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { FormInput } from './componentsForms/FormInput'
import { FormTextarea } from './componentsForms/FormTextarea'
import { ButtonSubmit } from './componentsForms/ButtonSubmit'

function MonitoringForms ({ children, onSubmit, defaultValues }) {
  const { register, handleSubmit, reset, formState: { isSubmitSuccessful } } = useForm({ defaultValues: defaultValues || {} })

  useEffect(() => {
    reset(defaultValues)
  }, [defaultValues, reset])

  const send = (data) => {
    const dataToSend = {
      datetime: data.datetime ? new Date(data.datetime).toISOString() : '',
      blood_pressure: {
        systolic: Number(data.systolic),
        diastolic: Number(data.diastolic)
      }
    }
    console.log('Datos enviados:', dataToSend)
    onSubmit(dataToSend)
    reset()
  }

  return (
    <div className='div__form'>
      <form className='form' onSubmit={handleSubmit(send)}>
        <FormInput
          label='Fecha y hora'
          type='datetime-local'
          id='datetime'
          placeholder='fecha y hora'
          register={register}
        />
        <div className='flex gap-3 w-full'>
          <FormInput
            label='Presión sistólica (mmHg)'
            id='systolic'
            type='number'
            placeholder='Sistólica'
            register={register}
          />
          <FormInput
            label='Presión diastólica (mmHg)'
            id='diastolic'
            type='number'
            placeholder='Diastólica'
            register={register}
          />
        </div>
        <FormInput
          label='Frecuencia cardíaca en lpm'
          id='heart_rate'
          type='number'
          placeholder='Frecuencia cardíaca'
          register={register}
        />
        <FormTextarea
          label='Observaciones'
          id='observations'
          placeholder='Observaciones'
          register={register}
        />
        <ButtonSubmit tipe='Submit' />
      </form>
      {isSubmitSuccessful && children}
    </div>
  )
}

export { MonitoringForms }
