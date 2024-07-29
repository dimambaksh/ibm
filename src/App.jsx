import { useState } from 'react'
import './App.css'
import NavBarElement from './UI/NavBarElement';
import BodyElement from './UI/BodyElement';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBarElement/>
      <BodyElement/>
    </>
  )
}

export default App
