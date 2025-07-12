import { useState, useMemo } from 'react'

function useGlobalSearch (allRegistros = {}) {
  const [searchText, setSearchText] = useState('')

  // Campos donde buscar
  const searchFields = [
    'datetime',
    'date',
    'observations',
    'meal_type',
    'description',
    'hydration',
    'type',
    'condition',
    'status',
    'assistance_level',
    'notes',
    'medication_name',
    'dose',
    'route',
    'heart_rate',
    'blood_pressure'
  ]

  // Función para buscar en un registro
  const searchInRecord = (registro, text) => {
    if (!text.trim()) return true

    const searchTerm = text.toLowerCase()

    return searchFields.some(field => {
      const value = registro[field]
      if (!value) return false

      return String(value).toLowerCase().includes(searchTerm)
    })
  }

  // Filtrar solo por texto de búsqueda
  const filteredByText = useMemo(() => {
    if (!searchText.trim()) {
      return allRegistros
    }

    const filtered = {}

    Object.keys(allRegistros).forEach(tipo => {
      const registros = allRegistros[tipo] || []
      filtered[tipo] = registros.filter(registro => searchInRecord(registro, searchText))
    })

    return filtered
  }, [allRegistros, searchText])

  const clearSearch = () => {
    setSearchText('')
  }

  return {
    searchText,
    setSearchText,
    filteredBySearch: filteredByText,
    clearSearch,
    hasSearchText: searchText.trim().length > 0
  }
}

export { useGlobalSearch }
