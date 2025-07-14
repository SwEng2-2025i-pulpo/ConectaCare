import React from 'react'

function MessageAlert ({ message, type = 'auto' }) {
  if (!message) return null

  // Determinar el tipo automáticamente si no se especifica
  const isError = type === 'auto' ? message.includes('Error') : type === 'error'

  const baseClasses = 'w-[90%] p-4 rounded-lg mb-4 text-center font-medium'
  const errorClasses = 'bg-red-100 text-red-800 border border-red-300'
  const successClasses = 'bg-green-100 text-green-800 border border-green-300'

  const alertClasses = `${baseClasses} ${isError ? errorClasses : successClasses}`

  return (
    <div className={alertClasses}>
      {message}
    </div>
  )
}

export { MessageAlert }
