import {BrowerRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home.tsx";
import Footer from './assets/components/Footer.tsx';
import Navbar from './pages/Navbar.tsx';
import Langages from './pages/Langages.tsx';
import HTML from './pages/HTML.tsx'
import CSS from './pages/CSS.tsx'
import JavaScript from './pages/JavaScript.tsx'



function App() {
  

  return (
    <>
    <BrowerRouter>
    <Navbar/>
     <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/Langages" element={<Langages/>} />
     <Route path="/Ecoles" element={<Ecoles/>} />
     <Route path="/Tools" element={<Tools/>} />
     <Route path="/Contact" element={<Contact/>} />
     <Route path="/HTML" element={<HTML/>} />
     <Route path="/CSS" element={<CSS/>} />
     <Route path="JavaScript" element={<JavaScript/>} />
     </Routes>
     <Footer/>
     </BrowerRouter>
    </>
  )
}

export default App;
