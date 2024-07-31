import React from 'react'
import './App.css'
import NavBarElement from './UI/NavBarElement';
import BodyElement from './UI/BodyElement';
import FooterElement from './UI/FooterElement';
import SideMenuElement from './UI/SideMenuElement';

import { useSelector } from "react-redux";

function App() {
  const toggleItems = useSelector((state) => state.toggleStates);
  console.log("State change (app): "+toggleItems[0].toggleState);

  return (
    <>
      <NavBarElement/>
      {toggleItems[0].toggleState ? <SideMenuElement /> : ''}
      <BodyElement/>
      <FooterElement/>
    </>
  )
}

export default App
