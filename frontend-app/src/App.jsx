import { useState } from 'react'
import NavbarComponent from './Components/NavbarComponent'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavbarComponent/>
    </>
  )
}

export default App
