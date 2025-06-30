import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { FormInput } from './componentsForms/FormInput'
import { FormSelect } from './componentsForms/FormSelect'
import { FormTextarea } from './componentsForms/FormTextarea'
import { ButtonSubmit } from './componentsForms/ButtonSubmit'

import { postData } from '../../utils/apiPost.js'

const estadoCumplimientoOptions = [
  { value: '', label: 'Selcciona estado de cumplimiento' },
  { value: 'realizada', label: 'Realizada' },
  { value: 'noRealizada', label: 'No realizada' },
  { value: 'parcialmenteRealizada', label: 'Parcialmente realizada' }
]

const nivelAsistenciaOptions = [
  { value: '', label: 'Nivel de asistencia' },
  { value: 'independiente', label: 'Independiente' },
  { value: 'ayudaParcial', label: 'Con ayuda parcial' },
  { value: 'totalmenteAsistido', label: 'Totalmente asistido' }
]

function HygieneForms ({ children, onSubmit, defaultValues }) {
  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm({ defaultValues: defaultValues || {} })

  const endPointPost = 'http://127.0.0.1:8000/patients/684cadfec42b9cab643ad7a7/hygiene_logs'

  useEffect(() => {
    reset(defaultValues)
  }, [defaultValues, reset])

  const send = async (data) => {
    const dataToSend = {
      type: data.type,
      condition: data.condition,
      status: data.status,
      assistance_level: data.assistance_level,
      observations: data.observations,
      datetime: data.datetime ? new Date(data.datetime).toISOString() : ''
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
          required={{ required: 'La fecha y hora son obligatorios' }}
          error={errors.datetime}
        />
        <FormInput
          label='Tipo de higiene'
          id='type'
          placeholder='Tipo de higiene'
          register={register}
          required={{ required: 'El tipo de higiene es obligatorio' }}
          error={errors.type}
        />
        <FormInput
          label='Condición paciente en el momento'
          id='condition'
          placeholder='Condición de la persona'
          register={register}
          required={{ required: 'Ingresar la condición es obligatorio' }}
          error={errors.condition}
        />
        <FormSelect
          label='Estado de cumplimiento'
          id='status'
          register={register}
          options={estadoCumplimientoOptions}
          required={{ required: 'Seleccionar estado de cumplimiento es obligatorio' }}
          error={errors.status}
        />
        <FormSelect
          label='Nivel de asistencia'
          id='assistance_level'
          register={register}
          options={nivelAsistenciaOptions}
          required={{ required: 'Seleccionar nivel de asistencia es obligatorio' }}
          error={errors.assistance_level}
        />
        <FormTextarea
          label='Observaciones'
          id='observations'
          placeholder='Observaciones'
          register={register}
        />
        <ButtonSubmit type='submit' />
      </form>
      {isSubmitSuccessful && children}
    </div>
  )
}

export { HygieneForms }
