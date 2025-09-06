import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./pages/Home.tsx";
import Footer from './assets/components/Footer.tsx';
import Navbar from './pages/Navbar.tsx';



function App() {
  

  return (
    <>
    <Navbar/>
     <Home/>

     <Footer/>
    </>
  )
}

export default App
