import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { FormInput } from './componentsForms/FormInput'
import { FormTextarea } from './componentsForms/FormTextarea'
import { ButtonSubmit } from './componentsForms/ButtonSubmit'
import { postData } from '../../utils/apiPost.js'

// ...resto del código...

function MonitoringForms ({ children, onSubmit, defaultValues }) {
  const { register, handleSubmit, reset, formState: { isSubmitSuccessful } } = useForm({ defaultValues: defaultValues || {} })

  const endPointPost = 'http://127.0.0.1:8000/patients/6844542131d0bcb293fff9a1/vital_signs'

  useEffect(() => {
    reset(defaultValues)
  }, [defaultValues, reset])

  const send = async (data) => {
    const dataToSend = {
      datetime: data.datetime ? new Date(data.datetime).toISOString() : '',
      heart_rate: Number(data.heart_rate),
      observations: data.observations,
      blood_pressure: {
        systolic: Number(data.systolic),
        diastolic: Number(data.diastolic)
      }
    }
    try {
      await postData(endPointPost, dataToSend)
      reset()
    } catch (error) {
    // Maneja el error
    }
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
        <div className='flex gap-3 w-[95%]'>
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
