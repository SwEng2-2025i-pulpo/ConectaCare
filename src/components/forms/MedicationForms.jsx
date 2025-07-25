import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { FormInput } from './/componentsForms/FormInput'
import { FormSelect } from './/componentsForms/FormSelect'
import { FormTextarea } from './/componentsForms/FormTextarea'
import { ButtonSubmit } from './componentsForms/ButtonSubmit'
import { getCurrentPatientId } from '../../utils/id.js'

import { postData } from '../../utils/apiPost.js'

const viaAdministracionOptions = [
  { value: '', label: 'Selecciona tipo de administración' },
  { value: 'oral', label: 'Oral' },
  { value: 'topica', label: 'Tópica' },
  { value: 'inyectable', label: 'Inyectable' },
  { value: 'sublingual', label: 'Sublingual' },
  { value: 'otro', label: 'Otro' }
]

const estadoCumplimientoOptions = [
  { value: '', label: 'Selecciona estado' },
  { value: 'administrado', label: 'Administrado' },
  { value: 'pendiente', label: 'Pendiente' },
  { value: 'rechazado', label: 'Rechazado' },
  { value: 'noDisponible', label: 'No disponible' }
]

export default function MedicationForms ({ children, onSubmit, defaultValues }) {
  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm({ defaultValues: defaultValues || {} })

  const patientId = getCurrentPatientId()
  const endPointPost = `/api/patients/${patientId}/medication_logs`
  const isEditing = !!onSubmit && !!defaultValues

  useEffect(() => {
    reset(defaultValues)
  }, [defaultValues, reset])

  const send = async (data) => {
    const dataToSend = {
      medication_name: data.medication_name,
      dose: data.dose,
      route: data.route,
      status: data.status,
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
          label='Nombre del medicamento'
          id='medication_name'
          placeholder='Descripción medicamento'
          register={register}
          required={{ required: 'Ingresar el medicamento es obligatorio.' }}
          error={errors.medication_name}
        />
        <FormInput
          label='Dosis del medicamento'
          id='dose'
          placeholder='Descripción dosis'
          register={register}
          required={{ required: 'Ingresar la dosis administrada' }}
          error={errors.dose}
        />
        <FormSelect
          label='Vía de administración'
          id='route'
          register={register}
          required={{ required: 'Ingresar la vía de admin' }}
          error={errors.route}
          options={viaAdministracionOptions}
        />
        <FormSelect
          label='Estado de cumplimiento'
          id='status'
          register={register}
          required={{ required: 'Estado del cumplimiento' }}
          error={errors.status}
          options={estadoCumplimientoOptions}
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

export { MedicationForms }
