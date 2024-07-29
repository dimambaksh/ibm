import { useState } from 'react'
import './App.css'
import NavBarElement from './UI/NavBarElement';
import BodyElement from './UI/BodyElement';
import FooterElement from './UI/FooterElement';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBarElement/>
      <BodyElement/>
      <FooterElement/>
    </>
  )
}

export default App
