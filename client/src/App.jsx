import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignOut from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Projects from './pages/Projects'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}>Home</Route>
        <Route path='/about' element={<About />}>About</Route>
        <Route path='/projects' element={<Projects />}>Projects</Route>
        <Route path='/sign-in' element={<SignIn />}>SignIn</Route>
        <Route path='/sign-up' element={<SignOut />}>SignOut</Route>
      </Routes>
      </BrowserRouter>

  )
}

export default App
