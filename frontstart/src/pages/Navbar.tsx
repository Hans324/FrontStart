import React, { useState } from "react";
import './Navbar.css';

export default function Navbar() {
 
const [isOpen, setIsOpen] = useState(false);



const toggleMenu = () => {

setIsOpen(!isOpen);

};

return (

  <div>
  { /* Bouton burger */}
<div className ="burger" onClick={toggleMenu}>
   ☰
  </div>
  {/*Menu */}
 <nav className ={`menu ${isOpen ? "active" : ""}`}>
  <a href="#">Accueil</a>
  <a href="#">Langages de Programmation</a>
  <a href="#">Écoles</a>
  <a href="#">Outils</a>
  <a href="#">Contact</a>
  </nav>
  </div>

);



}





