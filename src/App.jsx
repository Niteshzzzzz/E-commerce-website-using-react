import './App.css'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className='h-screen w-screen flex'>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>

    </div>
  )
}

export default App