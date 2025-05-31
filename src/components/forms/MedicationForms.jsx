import { useForm } from 'react-hook-form'
import { FormInput } from '../componentsForms/FormInput'
import { FormSelect } from '../componentsForms/FormSelect'
import { FormTextarea } from '../componentsForms/FormTextarea'

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

export default function MedicationForms ({ children }) {
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
        <FormInput
          label='Nombre del medicamento'
          id='nombreMedicamento'
          placeholder='Descripción medicamento'
          register={register}
          required={{ required: 'Ingresar el medicamento es obligatorio.' }}
          error={errors.nombreMedicamento}
        />
        <FormInput
          label='Dosis del medicamento'
          id='dosisAdministrada'
          placeholder='Descripción dosis'
          register={register}
          required={{ required: 'Ingresar la dosis administrada' }}
          error={errors.dosisAdministrada}
        />
        <FormSelect
          label='Vía de administración'
          id='viaAdministracion'
          register={register}
          required={{ required: 'Ingresar la vía de admin' }}
          error={errors.viaAdministracion}
          options={viaAdministracionOptions}
        />
        <FormSelect
          label='Estado de cumplimiento'
          id='estadoCumplimiento'
          register={register}
          required={{ required: 'Estado del cumplimiento' }}
          error={errors.estadoCumplimiento}
          options={estadoCumplimientoOptions}
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

export { MedicationForms }
