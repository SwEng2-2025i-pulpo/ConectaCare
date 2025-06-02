import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { FormInput } from './componentsForms/FormInput'
import { FormSelect } from './componentsForms/FormSelect'
import { FormTextarea } from './componentsForms/FormTextarea'

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

  useEffect(() => {
    reset(defaultValues)
  }, [defaultValues, reset])

  const send = (data) => {
    onSubmit(data)
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
        <FormInput
          label='Tipo de higiene'
          id='tipoHigiene'
          placeholder='Tipo de higiene'
          register={register}
          required={{ required: 'El tipo de higiene es obligatorio' }}
          error={errors.tipoHigiene}
        />
        <FormInput
          label='Condiciones de la persona en el momento'
          id='condicionPersona'
          placeholder='Condición de la persona'
          register={register}
          required={{ required: 'Ingresar la condición es obligatorio' }}
          error={errors.condicionPersona}
        />
        <FormSelect
          label='Estado de cumplimiento'
          id='estadoCumplimiento'
          register={register}
          options={estadoCumplimientoOptions}
          required={{ required: 'Seleccionar estado de cumplimiento es obligatorio' }}
          error={errors.estadoCumplimiento}
        />
        <FormSelect
          label='Nivel de asistencia'
          id='nivelAsistencia'
          register={register}
          options={nivelAsistenciaOptions}
          required={{ required: 'Seleccionar nivel de asistencia es obligatorio' }}
          error={errors.nivelAsistencia}
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

export { HygieneForms }
