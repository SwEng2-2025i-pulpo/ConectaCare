import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { FormInput } from './componentsForms/FormInput'
import { FormTextarea } from './componentsForms/FormTextarea'
import { ButtonSubmit } from './componentsForms/ButtonSubmit'

import { postData } from '../../utils/apiPost.js'

function MedicalHistoryForms ({ children, onSubmit, defaultValues }) {
  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm({ defaultValues: defaultValues || {} })

  const endPointPost = 'http://127.0.0.1:8000/patients/686447c2c6a9a54b1d16f22d/medical_history'

  useEffect(() => {
    reset(defaultValues)
  }, [defaultValues, reset])

  const send = async (data) => {
    const dataToSend = {
      description: data.description,
      notes: data.notes,
      date: data.date ? new Date(data.date).toISOString() : ''
    }
    try {
      await postData(endPointPost, dataToSend)
      console.log(dataToSend, 'dataToSend')
      reset()
    } catch (error) {
      console.log(dataToSend, 'xdxdxdx')
    // Maneja el error
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
