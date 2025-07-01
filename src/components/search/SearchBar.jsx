import React from 'react'

function SearchBar ({ searchText, onSearchChange, onClearSearch, filteredCount, totalCount, hasResults }) {
  return (
    <div className='w-full mb-6'>
      <div className='w-[89%] lg:w-[70%] mx-auto'>
        <div className='relative'>
          <input
            type='text'
            value={searchText}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder='Buscar en todos los registros...'
            className='
              w-full px-4 py-3 pr-12
              border-2 border-gray-300 rounded-xl
              focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200
              transition-all duration-200
              cursror-pointer
            '
          />

          <div className='absolute right-3 top-1/2 transform -translate-y-1/2'>
            {hasResults
              ? (
                <button
                  onClick={onClearSearch}
                  className='p-1 text-gray-500 hover:text-red-500 transition-colors cursor-pointer '
                  title='Limpiar búsqueda'
                >
                  <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                  </svg>
                </button>
                )
              : (
                <svg className='w-5 h-5 text-gray-400 cursor-pointer hover:text-secondary ' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
                </svg>
                )}
          </div>
        </div>

        {hasResults && (
          <div className='mt-3 text-center'>
            {filteredCount === 0
              ? (
                <span className='text-red-600'>
                  No se encontraron registros para "{searchText}"
                </span>
                )
              : (
                <span className='text-blue-600'>
                  Mostrando {filteredCount} de {totalCount} registros
                </span>
                )}
          </div>
        )}
      </div>
    </div>
  )
}

export { SearchBar }
