import { useForm } from 'react-hook-form'
import { FormInput } from '../forms/componentsForms/FormInput'
import { ButtonSubmit } from '../forms/componentsForms/ButtonSubmit'
function MainSettings () {
  const { register, formState: { errors } } = useForm()
  return (
    <main className='mainSettings'>
      <div className='mainSettings__title'>
        <h1 className='mainSettings__h1'>Información del perfil</h1>
      </div>
      <div className='mainSettings__div'>
        <div className='Settings__form__div'>
          <FormInput
            label='Nombre'
            type='text'
            id='name'
            placeholder='Nombre'
            register={register}
            required={{ required: 'El nombre es obligatorio' }}
            error={errors.full_name}
          />
          <FormInput
            label='Apellido'
            type='text'
            id='last_name'
            placeholder='Apellido'
            register={register}
            required={{ required: 'Ingresar el apellido es obligatorio' }}
            error={errors.glucose}
          />
        </div>
        <div className='Settings__form__div'>
          <FormInput
            label='Fecha de nacimiento'
            type='date'
            id='birth_date'
            placeholder='Fecha de nacimiento'
            register={register}
            required={{ required: 'la fecha de nacimiento es obligatoria' }}
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
            required={{ required: 'Ingresar el documento es obligatorio' }}
            error={errors.cholesterol}
          />
        </div>
      </div>
      <div className='w-[95%] h-auto flex justify-center items-start mb-5 lg:mx-auto lg:w-[55%]'>
        <ButtonSubmit text='Guardar' type='submit' />
      </div>
    </main>
  )
}

export { MainSettings }
