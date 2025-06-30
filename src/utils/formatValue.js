export const formatFieldValue = (campo, valor) => {
  if (campo === 'datetime' || campo === 'date') {
    return new Date(valor).toLocaleString('es-CO', {
      dateStyle: 'medium',
      timeStyle: 'short'
    })
  }

  if (campo === 'blood_pressure') {
    return `Sistólica: ${valor?.systolic ?? '-'} / Diastólica: ${valor?.diastolic ?? '-'}`
  }

  return valor
}
