import { useForm } from 'react-hook-form'
import { FormInput } from '../componentsForms/FormInput'
import { FormSelect } from '../componentsForms/FormSelect'
import { FormTextarea } from '../componentsForms/FormTextarea'

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

const FoodForms = ({ children }) => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm()

  const send = (data) => {
    reset()
  }

  return (
    <div>
      <form onSubmit={handleSubmit(send)}>
        <FormInput
          label='Fecha y hora'
          id='fechaHora'
          placeholder='fecha y hora'
          register={register}
          required={{ required: 'La fecha y hora son obligatorios' }}
          error={errors.fechaHora}
        />
        <FormSelect
          label='Comida del día'
          id='comidaDelDia'
          register={register}
          required={{ required: 'Ingresar el tipo de comida es obligatorio.' }}
          error={errors.comidaDelDia}
          options={comidaOptions}
        />
        <FormInput
          label='Descripción del alimento consumido'
          id='descripcionAlimento'
          placeholder='Descripción alimento'
          register={register}
          required={{ required: 'Ingresar la descripción del alimento es obligatorio' }}
          error={errors.descripcionAlimento}
        />
        <FormSelect
          label='Hidratación'
          id='hidratacion'
          register={register}
          required={{ required: 'Ingresar la descripción de la hidratación es obligatorio' }}
          error={errors.hidratacion}
          options={hidratacionOptions}
        />
        <FormTextarea
          label='Observaciones'
          id='observaciones'
          placeholder='Observaciones'
          register={register}
        />
        <button type='submit'>Enviar</button>
      </form>
      {isSubmitSuccessful && children}
    </div>
  )
}

export { FoodForms }
