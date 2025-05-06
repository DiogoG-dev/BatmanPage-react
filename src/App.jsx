import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Photos } from './pages/Photos/Photos';
import { Comments } from './pages/Comments/Comments'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/photos' element={<Photos />} />
      <Route path='/comments' element={<Comments />} />
    </Routes>
  )
}

export default App