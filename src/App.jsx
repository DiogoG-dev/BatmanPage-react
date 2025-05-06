import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Photos } from './pages/Photos/Photos';
import { Comments } from './pages/Comments/Comments'
import { Contacts } from './pages/Contacts/Contacts';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/photos' element={<Photos />} />
      <Route path='/comments' element={<Comments />} />
      <Route path='/contacts' element={<Contacts />} />
    </Routes>
  )
}

export default App