import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { FormInput } from './componentsForms/FormInput'
import { FormSelect } from './componentsForms/FormSelect'
import { FormTextarea } from './componentsForms/FormTextarea'
import { ButtonSubmit } from './componentsForms/ButtonSubmit'
import { getCurrentPatientId } from '../../utils/id.js'

import { postData } from '../../utils/apiPost.js'

const comidaOptions = [
  { value: '', label: 'Selecciona una comida' },
  { value: 'desayuno', label: 'Desayuno' },
  { value: 'almuerzo', label: 'Almuerzo' },
  { value: 'merienda', label: 'Merienda' },
  { value: 'cena', label: 'Cena' },
  { value: 'snack', label: 'Snack' }
]

const hidratacionOptions = [
  { value: '', label: 'Selecciona tipo de hidratación' },
  { value: 'agua', label: 'Agua' },
  { value: 'cafe', label: 'Café' },
  { value: 'leche', label: 'Leche' },
  { value: 'jugo', label: 'Jugo' },
  { value: 'te', label: 'Té' },
  { value: 'otro', label: 'Otro' }
]

const FoodForms = ({ children, defaultValues, onSubmit }) => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm({ defaultValues: defaultValues || {} })

  const patientId = getCurrentPatientId()
  const endPointPost = `/api/patients/${patientId}/meals`
  const isEditing = !!onSubmit && !!defaultValues

  useEffect(() => {
    reset(defaultValues)
  }, [defaultValues, reset])

  const send = async (data) => {
    const dataToSend = {
      meal_type: data.meal_type,
      description: data.description,
      hydration: data.hydration,
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
        // console.error('Error message:', error.message)
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
          placeholder='Fecha y hora'
          register={register}
          required={{ required: 'La fecha y hora son obligatorios' }}
          error={errors.datetime}
        />
        <FormSelect
          label='Comida del día'
          id='meal_type'
          register={register}
          required={{ required: 'Ingresar el tipo de comida es obligatorio.' }}
          error={errors.meal_type}
          options={comidaOptions}
        />
        <FormInput
          label='Descripción del alimento consumido'
          id='description'
          placeholder='Descripción alimento'
          register={register}
          required={{ required: 'Ingresar la descripción del alimento es obligatorio' }}
          error={errors.description}
        />
        <FormSelect
          label='Hidratación'
          id='hydration'
          register={register}
          required={{ required: 'Ingresar la hidratación es obligatorio' }}
          error={errors.hydration}
          options={hidratacionOptions}
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

export { FoodForms }
