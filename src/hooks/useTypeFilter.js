import { useState, useMemo } from 'react'

function useTypeFilter (registros = {}) {
  const [selectedTypes, setSelectedTypes] = useState({
    comida: true,
    medicacion: true,
    higiene: true,
    monitoreo: true,
    historiaMedica: true
  })

  // Filtrar registros por tipos seleccionados
  const filteredByType = useMemo(() => {
    // Asegurarse de que registros sea un objeto válido
    if (!registros || typeof registros !== 'object') {
      return {}
    }

    const filtered = {}

    Object.keys(registros).forEach(tipo => {
      // Solo incluir registros de tipos seleccionados
      if (selectedTypes[tipo]) {
        filtered[tipo] = registros[tipo] || []
      } else {
        filtered[tipo] = []
      }
    })

    return filtered
  }, [registros, selectedTypes])

  // Funciones de control
  const toggleType = (tipo) => {
    setSelectedTypes(prev => ({
      ...prev,
      [tipo]: !prev[tipo]
    }))
  }

  const selectAllTypes = () => {
    setSelectedTypes({
      comida: true,
      medicacion: true,
      higiene: true,
      monitoreo: true,
      historiaMedica: true
    })
  }

  const clearAllTypes = () => {
    setSelectedTypes({
      comida: false,
      medicacion: false,
      higiene: false,
      monitoreo: false,
      historiaMedica: false
    })
  }

  // Estado derivado
  const hasTypeFilters = !Object.values(selectedTypes).every(type => type)
  const selectedTypesCount = Object.values(selectedTypes).filter(Boolean).length

  return {
    selectedTypes,
    filteredByType,
    toggleType,
    selectAllTypes,
    clearAllTypes,
    hasTypeFilters,
    selectedTypesCount
  }
}

export { useTypeFilter }
