import React from 'react';
import { useEffect,useState } from "react";
import CSSLogo from '../assets/images/CSS.png';
import JavaScriptLogo from '../assets/images/JavaScript.png';
import HTMLLogo from '../assets/images/HTML5.png';
import ReactLogo from'../assets/images/react.png';
import GitLogo from '../assets/images/Git.png';
import Langages from '../pages/Langages';

import './Home.css'


function Home () {

return (
    <>
    <section className='section-Home'>
      <h1> Formation Front-End pour Débutants </h1>
      
      <p>Bienvenu sur FrontStart: Vous débutez dans le développement web.
        Ce cours interactif vous guide pas à pas pour apprendre  les bases du Front-End:
        HTML, CSS, JavaScript et Git.</p>
        <p>Pas besoin d'avoir déja côdé: tout est expliqué simplement, avec des exmeples, des exerices et des mises en pratique.

        </p>
        <p>En quelques semaines,vous serez capable de créer vos premières pages web et comprendre comment fonctionnent les sites que vous utilisez chaque jour.</p>

      </section>
      <section className='section'>
      <h2>Introduction des technologies</h2>
      <p></p>
      <section className='LogoSectionHTML'> 
      <img src= {HTMLLogo}  alt ="Logo de HTML" className='HTML-image'/>
      <h3>HTML: </h3>
      <p className='text-Home'>HTML (HyperText Markup Language) est le langage de base du web, créé en 1991.
       Il permet de structurer le contenu d'une page : titres, paragraphes, images, liens, etc.
       Chaque site web en utilise, car c’est la fondation même d’une page web.
       C’est le point de départ pour tout développeur web. </p>
      

      
      </section>
      <section className='section'>
      <section className='LogoSectionCSS'>
      <img src={CSSLogo} alt="Logo de CSS" className ='CSS-image' />
      <h3>CSS: </h3>
      <p>CSS (Cascading Style Sheets) est un langage apparu en 1996 qui sert à styliser les pages HTML.
       Il permet de contrôler les couleurs, la mise en page, les polices, les animations, etc.
       Grâce à CSS, une page devient visuellement agréable et professionnelle.
      C’est un outil indispensable dans tous les projets web.</p>
      </section>
      <section className='LogoSectionJavaScript'>
      <img src={JavaScriptLogo}   alt="Logo de JavaScript"  className='Javascript-image'/>
    
      <h3>JavaScript: </h3>
      <p>JavaScript est un langage de programmation créé en 1995 par Brendan Eich.
        Il rend les sites web interactifs : menus dynamiques, formulaires intelligents, animations, etc.
        Aujourd’hui, plus de 98 % des sites web l’utilisent dans le monde.
        C’est le langage le plus populaire du web.
      </p>
      </section>
      <section className='LogoSectionGit'>
      <img src={GitLogo}   alt="Logo de Git" className='Git-image' />
      <h3>Git:</h3>
      <p>Git est un outil de gestion de versions créé en 2005 par Linus Torvalds (créateur de Linux).
       Il permet aux développeurs de sauvegarder, suivre et collaborer sur leurs projets.
       Chaque modification du code peut être enregistrée, restaurée ou partagée.
       Git est utilisé partout, que ce soit en solo ou en équipe, dans les projets personnels comme professionnels.</p>
       </section>
       <section className='LogoSectionReact'>
        <img src={ReactLogo}   alt="Logo de React" className='React-image'/>
      <h3>REACT:</h3>
      
      <p>React est une bibliothèque JavaScript créée par Facebook en 2013.
       Elle permet de créer des interfaces utilisateur interactives et rapides à l’aide de composants.
       Utilisée par des géants comme Facebook, Netflix ou Airbnb, elle est aujourd’hui l’un des outils les plus populaires pour développer des applications web modernes.
       React facilite la création de sites performants, dynamiques et modulaires.
         
      </p>
      </section>

     </section>
      </section>
</>
)

}

export default Home;