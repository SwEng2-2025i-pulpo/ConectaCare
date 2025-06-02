import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Form } from './pages/Form'
import { Records } from './pages/Records'

function App () {
  const [registrosComida, setRegistrosComida] = useState([])
  const [registrosMedicacion, setRegistrosMedicacion] = useState([])
  const [registrosHigiene, setRegistrosHigiene] = useState([])
  const [registrosMonitoreo, setRegistrosMonitoreo] = useState([])
  const [registrosHistoriaMedica, setRegistrosHistoriaMedica] = useState([])

  return (
    <div className='w-screen h-screen bg-gray-700 text-amber-50'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/form' element={<Form
            registrosComida={registrosComida}
            setRegistrosComida={setRegistrosComida}
            registrosMedicacion={registrosMedicacion}
            setRegistrosMedicacion={setRegistrosMedicacion}
            registrosHigiene={registrosHigiene}
            setRegistrosHigiene={setRegistrosHigiene}
            registrosMonitoreo={registrosMonitoreo}
            setRegistrosMonitoreo={setRegistrosMonitoreo}
            registrosHistoriaMedica={registrosHistoriaMedica}
            setRegistrosHistoriaMedica={setRegistrosHistoriaMedica}
                                />}
        />
        <Route
          path='/registros' element={<Records
            registrosComida={registrosComida}
            setRegistrosComida={setRegistrosComida}
            registrosMedicacion={registrosMedicacion}
            setRegistrosMedicacion={setRegistrosMedicacion}
            registrosHigiene={registrosHigiene}
            setRegistrosHigiene={setRegistrosHigiene}
            registrosMonitoreo={registrosMonitoreo}
            setRegistrosMonitoreo={setRegistrosMonitoreo}
            registrosHistoriaMedica={registrosHistoriaMedica}
            setRegistrosHistoriaMedica={setRegistrosHistoriaMedica}
                                     />}
        />
      </Routes>
    </div>

  )
}

export default App
