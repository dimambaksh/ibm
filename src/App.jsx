import React from 'react'
import './App.css'
import NavBarElement from './UI/NavBarElement';
import BodyElement from './UI/BodyElement';
import FooterElement from './UI/FooterElement';
import LandingPageElement from './UI/LandingPageElement';
import { useSelector } from "react-redux";

function App() {
  const toggleItems = useSelector((state) => state.toggleStates);
  console.log("State change (app): "+toggleItems["sideMenu"]);

  return (
    <>
      {toggleItems["landingPage"] ?
        <>
          <LandingPageElement/>
          <FooterElement/>
        </>
        :
        <>
          <NavBarElement/>
          <BodyElement/>
          <FooterElement/>
        </>
      }
    </>
  )
}

export default App
