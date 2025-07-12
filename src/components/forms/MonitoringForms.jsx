import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { FormInput } from './componentsForms/FormInput'
import { FormTextarea } from './componentsForms/FormTextarea'
import { ButtonSubmit } from './componentsForms/ButtonSubmit'
import { postData } from '../../utils/apiPost.js'
import { id } from '../../utils/id.js'

function MonitoringForms ({ children, onSubmit, defaultValues }) {
  const { register, handleSubmit, reset, formState: { isSubmitSuccessful } } = useForm({ defaultValues: defaultValues || {} })

  const endPointPost = `/api/patients/${id}/vital_signs`

  useEffect(() => {
    reset(defaultValues)
  }, [defaultValues, reset])

  const send = async (data) => {
    const dataToSend = {
      datetime: data.datetime ? new Date(data.datetime).toISOString() : '',
      weight_by_month: [
        {
          month: data.month,
          value: Number(data.value)
        }
      ],
      observations: data.observations,
      blood_pressure: {
        systolic: Number(data.systolic),
        diastolic: Number(data.diastolic)
      },
      heart_rate: Number(data.heart_rate)
    }
    try {
      await postData(endPointPost, dataToSend)
      console.log('Datos enviados correctamente:', dataToSend)
      reset()
    } catch (error) {
    // Maneja el error
      console.log('Datos enviados correctamente:', dataToSend)
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
        <div className='monitoreo__div'>
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
        <div className='monitoreo__div'>
          <FormInput
            label='Peso del Mes'
            id='value'
            type='number'
            placeholder='Peso'
            register={register}
          />
          <FormInput
            label='Mes'
            id='month'
            type='month'
            placeholder='Mes'
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
