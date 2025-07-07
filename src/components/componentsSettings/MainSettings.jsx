import { useForm } from 'react-hook-form'
import { FormInput } from '../forms/componentsForms/FormInput'
import { ButtonSubmit } from '../forms/componentsForms/ButtonSubmit'
function MainSettings () {
  const { register, formState: { errors } } = useForm()
  return (
    <main className='w-full h-auto flex flex-col items-start justify-center my-5 gap-4 lg:pl-18'>
      <div className='w-[100%] h-auto flex flex-col lg:pl-5 p-5 rounded-lg'>
        <h1 className='w-[100%] text-xl font-semibold border-b border-slate-200'>Información del perfil</h1>
      </div>
      <div className='w-full h-auto flex flex-col justify-center items-center gap-5 lg:pl-5 pl-5 rounded-lg lg:w-[95%]'>
        <div className='Settings__form__div'>
          <FormInput
            label='Nombre completo'
            type='text'
            id='full_name'
            placeholder='Nombre completo'
            register={register}
            required={{ required: 'El nombre es obligatorio' }}
            error={errors.full_name}
          />
          <FormInput
            label='Fecha de nacimiento'
            type='date'
            id='birth_date'
            placeholder='Fecha de nacimiento'
            register={register}
            required={{ required: 'la fecha de nacimiento es obligatoria' }}
            error={errors.birth_date}
          />
        </div>
        <div className='Settings__form__div'>
          <FormInput
            label='Edad'
            type='number'
            id='age'
            placeholder='Edad'
            register={register}
            required={{ required: 'La edad es obligatoria' }}
            error={errors.age}
          />
          <FormInput
            label='Colesterol'
            type='number'
            id='cholesterol'
            placeholder='Colesterol'
            register={register}
            required={{ required: 'Ingresar el colesterol es obligatorio' }}
            error={errors.cholesterol}
          />
        </div>
        <div className='Settings__form__div'>
          <FormInput
            label='Glucosa'
            type='number'
            id='glucose'
            placeholder='Glucosa'
            register={register}
            required={{ required: 'Ingresar la glucosa es obligatorio' }}
            error={errors.glucose}
          />
          <FormInput
            label='Condiciones'
            type='text'
            id='conditions'
            placeholder='Condiciones'
            register={register}
            required={{ required: 'Ingresar las condiciones del paciente es obligatorio' }}
            error={errors.conditions}
          />
        </div>
        <div className='Settings__form__div'>
          <FormInput
            label='Medicamentos'
            type='text'
            id='medications'
            placeholder='Medicamentos'
            register={register}
            required={{ required: 'Ingresar los medicamentos del paciente es obligatorio' }}
            error={errors.medkcations}
          />
          <FormInput
            label='Peso en Kg'
            type='number'
            id='weight_by_month'
            placeholder='Peso en Kg'
            register={register}
            required={{ required: 'Ingresar el peso del paciente es obligatorio' }}
            error={errors.weight_by_month}
          />
        </div>
        <div className='Settings__form__div'>
          <FormInput
            label='Historial médico'
            type='text'
            id='medical_history'
            placeholder='Historial médico'
            register={register}
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
