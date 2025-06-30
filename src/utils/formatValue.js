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

export const formatFieldName = (campo) => {
  const fieldNames = {
    datetime: 'Fecha y Hora',
    date: 'Fecha y Hora',
    observations: 'Observaciones',
    meal_type: 'Tipo de Comida',
    description: 'Descripción',
    hydration: 'Hidratación',
    type: 'Tipo',
    condition: 'Condición',
    status: 'Estado de Cumplimiento',
    assistance_level: 'Nivel de Asistencia',
    notes: 'Notas',
    medication_name: 'Nombre del Medicamento',
    dose: 'Dosis',
    route: 'Vía de Administración',
    heart_rate: 'Frecuencia Cardíaca',
    blood_pressure: 'Presión Arterial'
  }
  return fieldNames[campo]
}
