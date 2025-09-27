import React, { useState } from "react";
import './Navbar.css';
import SiteLogo from '../assets/images/SiteLogo.png'


export default function Navbar() {
 
const [isOpen, setIsOpen] = useState(false);



const toggleMenu = () => {

setIsOpen(!isOpen);

};

return (
  <header className ="navbar">
 
{/* Logo à gauche  */}
<img src= {SiteLogo} alt="Logo du site" className="logo" />

{/* Menu à droite */}
<div className="menu-container">
  <div className="burger" onClick={toggleMenu}>☰</div>
  <nav className= {`menu ${isOpen ? "active" : ""}`}>

<a href ="#">Accueil</a>
<a href="#">Langages de Programmation</a>
<a href="#">Écoles</a>
<a href="#">Outils</a>
<a href="#">Contact</a>




  </nav>



</div>

  </header>

);



}





