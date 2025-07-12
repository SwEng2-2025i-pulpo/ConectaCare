import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormInput } from '../forms/componentsForms/FormInput'
import { ButtonSubmit } from '../forms/componentsForms/ButtonSubmit'
import { createPatient } from '../../utils/apiCreatePatient'
import { updatePatient } from '../../utils/apiPatients'

function MainSettings ({ patientToEdit = null, onUpdateSuccess = null }) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [isRedirecting, setIsRedirecting] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (patientToEdit) {
      setIsEditing(true)
      reset({
        name: patientToEdit.name || '',
        last_name: patientToEdit.last_name || '',
        birth_date: patientToEdit.birth_date || '',
        age: patientToEdit.age || '',
        document: patientToEdit.document || ''
      })
    } else {
      setIsEditing(false)
      reset()
    }
  }, [patientToEdit, reset])

  const onSubmit = async (data) => {
    setLoading(true)
    setMessage('')

    try {
      const patientData = {
        name: data.name,
        last_name: data.last_name,
        birth_date: data.birth_date,
        age: parseInt(data.age),
        document: data.document,
        activity_level: 'Moderado',
        cholesterol: 0,
        glucose: 0
      }

      if (isEditing && patientToEdit) {
        const result = await updatePatient(patientToEdit.id, patientData)
        setMessage('¡Paciente actualizado exitosamente! Redirigiendo...')
        setIsRedirecting(true)
        setTimeout(() => {
          if (onUpdateSuccess) {
            onUpdateSuccess(result)
          }
          navigate('/paciente')
        }, 1500)
      } else {
        const result = await createPatient(patientData)
        console.log('Paciente creado exitosamente:', result)
        setMessage('¡Paciente creado exitosamente!')
        reset()
      }
    } catch (error) {
      setMessage(`Error al ${isEditing ? 'actualizar' : 'crear'} el paciente: ` + error.message)
    } finally {
      setLoading(false)
    }
  }
  return (
    <main className='mainSettings'>
      <div className='mainSettings__title'>
        <h1 className='mainSettings__h1'>
          {isEditing ? 'Editar Paciente' : 'Crear Nuevo Paciente'}
        </h1>
      </div>

      {message && (
        <div className={`w-[90%] p-4 rounded-lg mx-auto mb-4 text-center font-medium lg:w-[86%] lg:mx-0 lg:ml-15 ${message.includes('Error') ? 'bg-red-100 text-red-800 border border-red-300' : 'bg-green-100 text-green-800 border border-green-300'}`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className='mainSettings__div'>
        <div className='Settings__form__div'>
          <FormInput
            label='Nombre'
            type='text'
            id='name'
            placeholder='Nombre'
            register={register}
            required={{ required: 'El nombre es obligatorio' }}
            error={errors.name}
          />
          <FormInput
            label='Apellido'
            type='text'
            id='last_name'
            placeholder='Apellido'
            register={register}
            required={{ required: 'El apellido es obligatorio' }}
            error={errors.last_name}
          />
        </div>
        <div className='Settings__form__div'>
          <FormInput
            label='Fecha de nacimiento'
            type='date'
            id='birth_date'
            placeholder='Fecha de nacimiento'
            register={register}
            required={{ required: 'La fecha de nacimiento es obligatoria' }}
            error={errors.birth_date}
          />
          <FormInput
            label='Edad'
            type='number'
            id='age'
            placeholder='Edad'
            register={register}
            required={{ required: 'La edad es obligatoria' }}
            error={errors.age}
          />
        </div>
        <div className='Settings__form__div'>
          <FormInput
            label='Documento de identidad'
            type='number'
            id='document'
            placeholder='Documento'
            register={register}
            required={{ required: 'El documento es obligatorio' }}
            error={errors.document}
          />
        </div>
        <div className='w-[95%] h-auto flex justify-center items-start mb-5 lg:mx-auto lg:w-[55%]'>
          <ButtonSubmit
            text={
              loading
                ? (isEditing ? 'Actualizando...' : 'Creando...')
                : isRedirecting
                  ? 'Redirigiendo...'
                  : (isEditing ? 'Actualizar Paciente' : 'Crear Paciente')
            }
            type='submit'
            disabled={loading || isRedirecting}
          />
        </div>
      </form>
    </main>
  )
}

export { MainSettings }
