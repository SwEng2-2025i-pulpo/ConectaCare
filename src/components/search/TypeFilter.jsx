import React from 'react'

function TypeFilter ({ selectedTypes, onToggleType, onSelectAll, onClearAll }) {
  const typeConfig = {
    comida: {
      label: 'Comidas',
      icon: '🍽️',
      color: 'text-green-600'
    },
    medicacion: {
      label: 'Medicamentos',
      icon: '💊',
      color: 'text-blue-600'
    },
    higiene: {
      label: 'Higiene',
      icon: '🧼',
      color: 'text-purple-600'
    },
    monitoreo: {
      label: 'Monitoreo',
      icon: '📊',
      color: 'text-red-600'
    },
    historiaMedica: {
      label: 'Historia Médica',
      icon: '📋',
      color: 'text-orange-600'
    }
  }

  const allSelected = Object.values(selectedTypes).every(type => type)
  const noneSelected = Object.values(selectedTypes).every(type => !type)

  return (
    <div className='w-full mb-4 px-4'>
      <div className='max-w-4xl mx-auto'>
        <div className='bg-white border border-gray-200 rounded-xl p-4 shadow-sm'>
          <div className='flex items-center justify-between mb-4'>
            <h3 className='text-lg font-semibold text-gray-800'>
              Filtrar por tipo de registro
            </h3>
            <div className='flex gap-2'>
              <button
                onClick={onSelectAll}
                disabled={allSelected}
                className={`
                  px-3 py-1 text-sm rounded-lg transition-colors
                  ${allSelected
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                  }
                `}
              >
                Todos
              </button>
              <button
                onClick={onClearAll}
                className='px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors'
              >
                Limpiar
              </button>
            </div>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3'>
            {Object.entries(typeConfig).map(([tipo, config]) => (
              <label
                key={tipo}
                className={`
                  flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition-all
                  ${selectedTypes[tipo]
                    ? 'border-blue-300 bg-blue-50'
                    : 'border-gray-200 bg-gray-50 hover:border-gray-300'
                  }
                `}
              >
                <input
                  type='checkbox'
                  checked={selectedTypes[tipo]}
                  onChange={() => onToggleType(tipo)}
                  className='w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500'
                />
                <div className='flex items-center gap-2'>
                  <span className='text-lg'>{config.icon}</span>
                  <span className={`font-medium ${config.color}`}>
                    {config.label}
                  </span>
                </div>
              </label>
            ))}
          </div>

          {noneSelected && (
            <div className='mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg'>
              <p className='text-yellow-800 text-sm'>
                ⚠️ No has seleccionado ningún tipo de registro. No se mostrarán resultados.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export { TypeFilter }
