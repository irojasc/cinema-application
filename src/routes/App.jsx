import { HashRouter, Route, Routes } from 'react-router-dom'
import { NavBar } from '../UI/NavBar'
import { Home } from './Home'
import './App.css'

function App() {

  return (
    <HashRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </HashRouter>
  )
}

export default App
