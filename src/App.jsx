import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Form } from './pages/Form'
import { Records } from './pages/Records'
import { SignUp } from './pages/SignUp'
import { Settings } from './pages/Settings'
import { Patient } from './pages/Patient'
import { PatientProvider } from './context/PatientContext'
import { AuthProvider } from './context/AuthContext'
import { ProtectedRoute } from './components/ProtectedRoute'

function App () {
  const [registrosComida, setRegistrosComida] = useState([])
  const [registrosMedicacion, setRegistrosMedicacion] = useState([])
  const [registrosHigiene, setRegistrosHigiene] = useState([])
  const [registrosMonitoreo, setRegistrosMonitoreo] = useState([])
  const [registrosHistoriaMedica, setRegistrosHistoriaMedica] = useState([])

  return (
    <AuthProvider>
      <PatientProvider>
        <div>
          <Routes>
            <Route path='/SignUp' element={<SignUp />} />
            <Route
              path='/*'
              element={
                <ProtectedRoute>
                  <Routes>
                    <Route path='/' element={<Home />} />
                    <Route
                      path='/form'
                      element={
                        <Form
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
                        />
                      }
                    />
                    <Route
                      path='/registros'
                      element={
                        <Records
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
                        />
                      }
                    />
                    <Route path='/configuracion' element={<Settings />} />
                    <Route path='/paciente' element={<Patient />} />
                  </Routes>
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </PatientProvider>
    </AuthProvider>
  )
}

export default App
