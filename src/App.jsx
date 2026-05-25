import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ComingSoon from './pages/ComingSoon'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/design/:id" element={<ComingSoon />} />
    </Routes>
  )
}

export default App
