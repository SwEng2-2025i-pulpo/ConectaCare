import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Form } from './pages/Form'

function App () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/form' element={<Form />} />
    </Routes>
  )
}

export default App
