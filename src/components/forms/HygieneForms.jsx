import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { FormInput } from './componentsForms/FormInput'
import { FormSelect } from './componentsForms/FormSelect'
import { FormTextarea } from './componentsForms/FormTextarea'
import { ButtonSubmit } from './componentsForms/ButtonSubmit'
import { id } from '../../utils/id.js'

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

  const endPointPost = `/api/patients/${id}/hygiene_logs`
  const isEditing = !!onSubmit && !!defaultValues

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
