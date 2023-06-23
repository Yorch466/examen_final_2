import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { About } from './components/About'
import { Home } from './components/Home'
import { Dashborad } from './components/Dashboard'
import { Header } from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      <About/>
      <Dashborad/>
      <Header/>
    </>
  )
}

export default App
