import React, { useState } from "react"; // Importe React et le hook useState
import './Navbar.css';
import SiteLogo from '../assets/images/SiteLogo.png'


// Déclare le composant Navbar
// + Export du composant Navbar
export default function Navbar() {     
 
// Déclare un state "open"
// open : valeur actuelle ( true ou false)
// setOpen : fonction pour modifier cette valeu
// false = menu fermé par défaut

const[open,setOpen] = useState(false);


// Retourne le JSX à afficher
//Conteneur principal du menu mobile
return (
  <section> 
<header className= "navbar">
  
  <img src ={SiteLogo} alt="Logo du site"  className="logo" />


 
<div className="button ">

<button  onClick={() => setOpen(!open)}>

  ☰
</button>
{




open && (


  <ul className="menu-container">
<li className="ligne" >Accueil</li>
<li className="ligne">Langages de programation</li>
<li className="ligne">Écoles </li>
<li className="ligne">Outils</li>
<li className="ligne">Contact</li>




  </ul>
)}

</div>

</header>
</section>

);

}






