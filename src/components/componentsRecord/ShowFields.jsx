import React from 'react'
import { formatFieldValue, formatFieldName } from '../../utils/formatValue'

function ShowFields ({ camposMostrar, registro }) {
  return (
    <div>
      {camposMostrar.map((campo, i) => (
        <span className='font-medium' key={i}>
          <span className='font-bold'>{formatFieldName(campo)}:</span>{' '}
          {formatFieldValue(campo, registro[campo])}
          {i < camposMostrar.length - 1 && <br />}
        </span>
      ))}
    </div>
  )
}

export { ShowFields }
