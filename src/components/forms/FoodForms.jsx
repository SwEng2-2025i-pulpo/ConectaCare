import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { FormInput } from './componentsForms/FormInput'
import { FormSelect } from './componentsForms/FormSelect'
import { FormTextarea } from './componentsForms/FormTextarea'
import { ButtonSubmit } from './componentsForms/ButtonSubmit'

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

const FoodForms = ({ children, onSubmit, defaultValues }) => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm({ defaultValues: defaultValues || {} })

  const endPointPost = 'http://127.0.0.1:8000/patients/684cadfec42b9cab643ad7a7/meals'

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
