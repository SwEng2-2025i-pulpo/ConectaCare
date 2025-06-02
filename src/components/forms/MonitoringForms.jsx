import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { FormInput } from './componentsForms/FormInput'
import { FormTextarea } from './componentsForms/FormTextarea'

function MonitoringForms ({ children, onSubmit, defaultValues }) {
  const { register, handleSubmit, reset, formState: { isSubmitSuccessful } } = useForm({ defaultValues: defaultValues || {} })

  useEffect(() => {
    reset(defaultValues)
  }, [defaultValues, reset])

  const send = (data) => {
    onSubmit(data)
    console.log('Datos enviados:', data)
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
        />
        <FormInput
          label='Peso en kg'
          id='pesoKg'
          type='number'
          placeholder='Peso'
          register={register}
        />
        <FormInput
          label='Presión sanguínea en mmHg'
          id='presionSanguinea'
          placeholder='Presión sanguínea'
          register={register}
        />
        <FormInput
          label='Frecuencia cardíaca en lpm'
          id='frecuenciaCardiaca'
          type='number'
          placeholder='Frecuencia cardíaca'
          register={register}
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

export { MonitoringForms }
