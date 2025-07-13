import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { FormInput } from './componentsForms/FormInput'
import { FormTextarea } from './componentsForms/FormTextarea'
import { ButtonSubmit } from './componentsForms/ButtonSubmit'
import { getCurrentPatientId } from '../../utils/id.js'

import { postData } from '../../utils/apiPost.js'

function MedicalHistoryForms ({ children, onSubmit, defaultValues }) {
  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm({ defaultValues: defaultValues || {} })

  const patientId = getCurrentPatientId()
  const endPointPost = `/api/patients/${patientId}/medical_history`
  const isEditing = !!onSubmit && !!defaultValues

  useEffect(() => {
    reset(defaultValues)
  }, [defaultValues, reset])

  const send = async (data) => {
    const dataToSend = {
      description: data.description,
      notes: data.notes,
      date: data.date ? new Date(data.date).toISOString() : ''
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

  // const submitHandler = onSubmit || send

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
          error={errors.date}
        />
        <FormInput
          label='Descripción del síntoma'
          id='description'
          placeholder='Descripción del síntoma'
          register={register}
          required={{ required: 'La descripción es obligatorios' }}
          error={errors.description}
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
