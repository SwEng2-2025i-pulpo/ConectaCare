import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Form } from './pages/Form'
import { Records } from './pages/Records'
import { Login } from './pages/Login'
import { SignUp } from './pages/SignUp'
import { Settings } from './pages/Settings'

function App () {
  const [registrosComida, setRegistrosComida] = useState([])
  const [registrosMedicacion, setRegistrosMedicacion] = useState([])
  const [registrosHigiene, setRegistrosHigiene] = useState([])
  const [registrosMonitoreo, setRegistrosMonitoreo] = useState([])
  const [registrosHistoriaMedica, setRegistrosHistoriaMedica] = useState([])

  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/SignUp' element={<SignUp />} />
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
        <Route path='/configuracion' element={<Settings />} />
      </Routes>
    </div>

  )
}

export default App
