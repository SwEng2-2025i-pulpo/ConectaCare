import { useForm } from 'react-hook-form'
import { useEffect, useMemo } from 'react'
import { FormInput } from './componentsForms/FormInput'
import { FormTextarea } from './componentsForms/FormTextarea'
import { ButtonSubmit } from './componentsForms/ButtonSubmit'
import { postData } from '../../utils/apiPost.js'
import { getCurrentPatientId } from '../../utils/id.js'

function MonitoringForms ({ children, onSubmit, defaultValues }) {
  // Procesar defaultValues para extraer weight_by_month y blood_pressure
  const processedDefaultValues = useMemo(() => {
    if (!defaultValues) return {}

    const processed = { ...defaultValues }

    // Extraer datos de weight_by_month si existe
    if (defaultValues.weight_by_month && Array.isArray(defaultValues.weight_by_month) && defaultValues.weight_by_month.length > 0) {
      const weightData = defaultValues.weight_by_month[0]
      processed.value = weightData.value
      processed.month = weightData.month
    }

    // Extraer datos de blood_pressure si existe
    if (defaultValues.blood_pressure) {
      processed.systolic = defaultValues.blood_pressure.systolic
      processed.diastolic = defaultValues.blood_pressure.diastolic
    }

    return processed
  }, [defaultValues])

  const { register, handleSubmit, reset, formState: { isSubmitSuccessful } } = useForm({
    defaultValues: processedDefaultValues
  })

  const patientId = getCurrentPatientId()
  const endPointPost = `/api/patients/${patientId}/vital_signs`
  const isEditing = !!onSubmit && !!defaultValues

  useEffect(() => {
    reset(processedDefaultValues)
  }, [processedDefaultValues, reset])

  const send = async (data) => {
    const dataToSend = {
      datetime: data.datetime ? new Date(data.datetime).toISOString() : '',
      daily_weight: Number(data.daily_weight),
      observations: data.observations,
      blood_pressure: {
        systolic: Number(data.systolic),
        diastolic: Number(data.diastolic)
      },
      heart_rate: Number(data.heart_rate)
    }

    // console.log('Enviando datos:', dataToSend)
    // console.log('Es edición:', isEditing)

    if (isEditing) {
      // Si estamos editando, usar onSubmit (PUT)
      // console.log('Usando onSubmit para editar')
      try {
        await onSubmit(dataToSend)
        // console.log('Registro editado exitosamente')
      } catch (error) {
        // console.error('Error al editar:', error)
      }
    } else {
      // Si estamos creando, usar POST
      // console.log('Endpoint:', endPointPost)
      try {
        await postData(endPointPost, dataToSend)
        reset()
        // console.log('Datos enviados exitosamente')
      } catch (error) {
        // console.error('Error al enviar datos:', error)
      }
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
            label='Peso (kg)'
            id='daily_weight'
            type='number'
            placeholder='Peso'
            register={register}
          />
          <FormInput
            label='Frecuencia cardíaca en lpm'
            id='heart_rate'
            type='number'
            placeholder='Frecuencia cardíaca'
            register={register}
          />
        </div>
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
