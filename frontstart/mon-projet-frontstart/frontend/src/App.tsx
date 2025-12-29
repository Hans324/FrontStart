import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home.tsx";
import Footer from './assets/components/Footer.tsx';
import Navbar from './pages/Navbar.tsx';
import Langages from './pages/Langages.tsx';
import HTML from './pages/HTML.tsx'
import CSS from './pages/CSS.tsx'
import JavaScript from './pages/JavaScript.tsx'
import Schools from "./pages/Schools.tsx";
import Tools from "./pages/Tools.tsx";
import Contact from "./pages/Contact.tsx";


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbar/>
     <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/langages" element={<Langages/>} />
     <Route path="/schools" element={<Schools/>} />
     <Route path="/tools" element={<Tools/>} />
     <Route path="/contact" element={<Contact/>} />
     <Route path="/html" element={<HTML/>} />
     <Route path="/css" element={<CSS/>} />
     <Route path="/javascript" element={<JavaScript/>} />
     </Routes>
     <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App;
