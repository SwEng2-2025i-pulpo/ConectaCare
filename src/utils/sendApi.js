import { postData } from './apiPost.js'

export const send = async (data, url, reset) => {
  const dataToSend = {
    ...data,
    datetime: data.fechaHora ? new Date(data.fechaHora).toISOString() : ''
  }
  try {
    await postData(url, dataToSend)
    // Muestra mensaje de éxito o limpia el formulario
    reset()
  } catch (error) {
    // Maneja el error
  }
}
