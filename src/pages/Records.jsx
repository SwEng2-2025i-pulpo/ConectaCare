import { useState, useMemo } from 'react'
import { ViewEditRecords } from '../components/componentsRecord/ViewEditRecords'
import { FoodForms } from '../components/forms/FoodForms'
import { MedicationForms } from '../components/forms/MedicationForms'
import { HygieneForms } from '../components/forms/HygieneForms'
import { MonitoringForms } from '../components/forms/MonitoringForms'
import { MedicalHistoryForms } from '../components/forms/MedicalHistoryForms'

import { Header } from '../components/componentsLayout/Header'
import { StickyActions } from '../components/componentsLayout/componentsPages/StickyActions'
import { Footer } from '../components/componentsLayout/Footer'
import { SearchBar } from '../components/search/SearchBar'
import { TypeFilter } from '../components/search/TypeFilter'
import { useGlobalSearch } from '../hooks/useGlobalSearch.js'
import { useTypeFilter } from '../hooks/useTypeFilter.js'
import { getCurrentPatientId } from '../utils/id.js'
import { getSelectedPatientName } from '../utils/selectedPatient.js'

function Records ({
  registrosComida,
  setRegistrosComida,
  registrosMedicacion,
  setRegistrosMedicacion,
  registrosHigiene,
  setRegistrosHigiene,
  registrosMonitoreo,
  setRegistrosMonitoreo,
  registrosHistoriaMedica,
  setRegistrosHistoriaMedica
}) {
  const [editando, setEditando] = useState(null)

  // Obtener el ID y nombre del paciente seleccionado
  const patientId = getCurrentPatientId()
  const patientName = getSelectedPatientName()

  const endPointGetFood = `/api/patients/${patientId}/meals`
  const endPointGetMedication = `/api/patients/${patientId}/medication_logs`
  const endPointGetHygiene = `/api/patients/${patientId}/hygiene_logs`
  const endPointGetMonitoring = `/api/patients/${patientId}/vital_signs`
  const endPointGetMedicalHistory = `/api/patients/${patientId}/medical_history`

  // Preparar todos los registros
  const allRegistros = {
    comida: registrosComida || [],
    medicacion: registrosMedicacion || [],
    higiene: registrosHigiene || [],
    monitoreo: registrosMonitoreo || [],
    historiaMedica: registrosHistoriaMedica || []
  }

  // Hook de búsqueda por texto
  const {
    searchText,
    setSearchText,
    filteredBySearch,
    clearSearch,
    hasSearchText
  } = useGlobalSearch(allRegistros)

  // Hook de filtrado por tipo
  const {
    selectedTypes,
    filteredByType,
    toggleType,
    selectAllTypes,
    clearAllTypes,
    hasTypeFilters
  } = useTypeFilter(filteredBySearch)

  // Combinar ambos filtros
  const finalFilteredRegistros = useMemo(() => {
    return filteredByType
  }, [filteredByType])

  // Calcular totales para mostrar en SearchBar
  const totalCount = Object.values(allRegistros).reduce((total, registros) => {
    return total + (registros?.length || 0)
  }, 0)

  const filteredCount = Object.values(finalFilteredRegistros || {}).reduce((total, registros) => {
    return total + (registros?.length || 0)
  }, 0)

  return (
    <div className='main'>
      <Header />
      <StickyActions />

      <main className='main min-h-100'>
        <h2 className='main-title'>
          Registros de Cuidados {patientName && `- ${patientName}`}
        </h2>

        <SearchBar
          searchText={searchText}
          onSearchChange={setSearchText}
          onClearSearch={clearSearch}
          filteredCount={filteredCount}
          totalCount={totalCount}
          hasResults={hasSearchText || hasTypeFilters}
        />

        <TypeFilter
          selectedTypes={selectedTypes}
          onToggleType={toggleType}
          onSelectAll={selectAllTypes}
          onClearAll={clearAllTypes}
        />

        <ViewEditRecords
          registros={registrosComida || []}
          setRegistros={setRegistrosComida}
          comunicado='Formulario de comida actualizado'
          FormComponent={FoodForms}
          camposMostrar={['datetime',
            'meal_type',
            'description',
            'hydration',
            'observations']}
          editando={editando}
          setEditando={setEditando}
          tipo='comida'
          endPoint={endPointGetFood}
          filteredRegistros={finalFilteredRegistros?.comida}
        />

        <ViewEditRecords
          registros={registrosMedicacion || []}
          setRegistros={setRegistrosMedicacion}
          comunicado='Formulario de medicación actualizado'
          FormComponent={MedicationForms}
          camposMostrar={['datetime',
            'medication_name',
            'dose',
            'route',
            'status',
            'observations']}
          editando={editando}
          setEditando={setEditando}
          tipo='medicacion'
          endPoint={endPointGetMedication}
          filteredRegistros={finalFilteredRegistros?.medicacion}
        />

        <ViewEditRecords
          registros={registrosHigiene || []}
          setRegistros={setRegistrosHigiene}
          comunicado='Formulario de Higiene actualizado'
          FormComponent={HygieneForms}
          camposMostrar={['datetime',
            'type',
            'condition',
            'status',
            'assistance_level',
            'observations']}
          editando={editando}
          setEditando={setEditando}
          tipo='higiene'
          endPoint={endPointGetHygiene}
          filteredRegistros={finalFilteredRegistros?.higiene}
        />

        <ViewEditRecords
          registros={registrosMonitoreo || []}
          setRegistros={setRegistrosMonitoreo}
          comunicado='Formulario de Monitoreo actualizado'
          FormComponent={MonitoringForms}
          camposMostrar={['datetime',
            'blood_pressure',
            'heart_rate',
            'daily_weight',
            'observations']}
          editando={editando}
          setEditando={setEditando}
          tipo='monitoreo'
          endPoint={endPointGetMonitoring}
          filteredRegistros={finalFilteredRegistros?.monitoreo}
        />

        <ViewEditRecords
          registros={registrosHistoriaMedica || []}
          setRegistros={setRegistrosHistoriaMedica}
          comunicado='Formulario de Historia medica actualizado'
          FormComponent={MedicalHistoryForms}
          camposMostrar={['date',
            'description',
            'notes']}
          editando={editando}
          setEditando={setEditando}
          tipo='historiaMedica'
          endPoint={endPointGetMedicalHistory}
          filteredRegistros={finalFilteredRegistros?.historiaMedica}
        />
      </main>
      <Footer />
    </div>
  )
}

export { Records }
