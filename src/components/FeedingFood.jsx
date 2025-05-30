import { useForm } from 'react-hook-form'

const send = (data) => {
  console.log('data', data)
}

const FeedingFood = ({ NoticeSend }) => {
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful } } = useForm()
  return (
    <div>
      <form onSubmit={handleSubmit(send)}>
        <div>
          <label htmlFor='fechaHora'>Fecha y hora</label>
          <input id='fechaHora' type='text' placeholder='fecha y hora' {...register('fechaHora', { required: 'La fecha y hora son obligatorios' })} />
          {errors.fechaHora && <span>{errors.fechaHora.message}</span>}
        </div>

        <div>
          <label htmlFor='comidaDelDia'>Comida del día</label>
          <select id='comidaDelDia' {...register('comidaDelDia', { required: 'Ingresar el tipo de comida es obligatorio.' })}>
            <option value=''>Selecciona una comida</option>
            <option value='desayuno'>Desayuno</option>
            <option value='almuerzo'>Almuerzo</option>
            <option value='merienda'>Merienda</option>
            <option value='cena'>Cena</option>
            <option value='snack'>Snack</option>
          </select>
          {errors.comidaDelDia && <span>{errors.comidaDelDia.message}</span>}
        </div>

        <div>
          <label htmlFor='descripcionAlimento'>Descripción del alimento consumido</label>
          <input id='descripcionAlimento' type='text' placeholder='Descripción alimento' {...register('descripcionAlimento', { required: 'Ingresar la descripción del alimento es obligatorio' })} />
          {errors.descripcionAlimento && <span>{errors.descripcionAlimento.message}</span>}
        </div>

        <div>
          <label htmlFor='hidratacion'>Hidratación</label>
          <select id='hidratacion' {...register('hidratacion', { required: 'Ingresar la descripción de la hidratación es obligatorio' })}>
            <option value=''>Selecciona tipo de hidratación</option>
            <option value='agua'>Agua</option>
            <option value='cafe'>Café</option>
            <option value='leche'>Leche</option>
            <option value='jugo'>Jugo</option>
            <option value='te'>Té</option>
            <option value='otro'>Otro</option>
          </select>
          {errors.hidratacion && <span>{errors.hidratacion.message}</span>}
        </div>

        <div>
          <label htmlFor='observaciones'>Observaciones</label>
          <textarea id='observaciones' type='text' placeholder='Observaciones' {...register('observaciones')} />
        </div>

        <button type='submit'>Enviar</button>
      </form>
      {isSubmitSuccessful && NoticeSend}

    </div>

  )
}

export { FeedingFood }
