import './App.css'
import Create from './components/Create'
import Details from './components/Details'
import Edit from './components/Edit'
import Home from './components/Home'
import { Link, Route, Routes, useLocation } from 'react-router-dom'

function App() {

  const {search, pathname} = useLocation()

  return (
    <div className='h-screen w-screen flex'>
      {(pathname != '/' || search.length > 0) && <Link to={'/'} className='text-red-400 text-xl border px-2 rounded border-red-400 absolute left-[20%] top-8' >Home</Link>}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>

    </div>
  )
}

export default App
