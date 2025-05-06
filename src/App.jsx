import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Photos } from './pages/Photos/Photos';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/photos' element={<Photos />} />
    </Routes>
  )
}

export default App