import React from 'react';
import CSSLogo from '../assets/images/CSS.png';
import JavaScriptLogo from '../assets/images/JavaScript.png';
import HTMLLogo from '../assets/images/HTML5.png';
import './Langages.css';
import {Link} from 'react-router-dom'


function Langages() {
  return (
    <>
       <h1 className='title-language'>Langages</h1>
      <section className="Placer-Logos">
        <section className="section-HTML">
          <img src={HTMLLogo} alt="Logo HTML" className="HTML" />
          <p className='text-of-HTML'>
            HTML (HyperText Markup Language) est le langage de base du web, créé en 1991.
            Il permet de structurer le contenu d'une page : titres, paragraphes, images, liens, etc.
            Chaque site web en utilise, car c’est la fondation même d’une page web.
            C’est le point de départ pour tout développeur web.
          </p>
          <Link to="/HTML">
          <button className='HTML-button'> Cliquez ici
          </button>
          </Link>
        </section>

        <section className="section-CSS">
          <img src={CSSLogo} alt="Logo CSS" className="CSS" />
          <p className='text-of-CSS'>
            CSS (Cascading Style Sheets) est un langage apparu en 1996 qui sert à styliser les pages HTML.
            Il permet de contrôler les couleurs, la mise en page, les polices, les animations, etc.
            Grâce à CSS, une page devient visuellement agréable et professionnelle.
            C’est un outil indispensable dans tous les projets web.
          </p>
          <Link to="/CSS">
          <button className='CSS-button'> Cliquez ici
          </button>
          </Link>
        </section>

        <section className="section-JavaScript">
          <img src={JavaScriptLogo} alt="Logo JavaScript" className="JavaScript" />
          <p className='text-of-JavaScript'>
            JavaScript est un langage de programmation créé en 1995 par Brendan Eich.
            Il rend les sites web interactifs : menus dynamiques, formulaires intelligents, animations, etc.
            Aujourd’hui, plus de 98 % des sites web l’utilisent dans le monde.
            C’est le langage le plus populaire du web.
          </p>
          <Link to="/JavaScript">
          <button className='JavaScript-button'>  Cliquez ici
          </button>
          </Link>
        </section>

        
      </section>
    </>
  );
}

export default Langages;
