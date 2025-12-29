import React from 'react';
import SiteLogo from '../images/SiteLogo.png'
import Linkedin from '../images/Linkedin.png'
import Twitter from '../images/Twitter.png'
import Discord from '../images/Discord.png'
import './Footer.css'



function Footer() {

    return(
        <section className='Footer'>
            <section className='section-Footer'>
            <section className='Partie-un'>
<img src= {SiteLogo}  alt ="Logo de FrontStart" className='FrontStart'/>
<p className='Paragrpahe1'>Accèlere ton aprentissage front-end</p>
</section>
<section className='Partie-deux'>
<h3 className='Navigation'>Navigation rapide</h3>
<p>Accueil</p>
<p>Cours/tutoriels</p>
<p>Projets pratiques</p>
<p>Ressources</p>
<p>Contact</p>
</section>
<section className='Partie-trois'>
<section className='Communauté'>
    <h3>Communauté</h3>
    <p>Discord</p>
    <p>Newsletter</p>
    <p>Témoignages</p>
</section>
</section>
<section className='Partie-quatre'>
<section className='Réseaux-Sociaux'>
    <h3>Réseaux sociaux </h3>
      <img src= {Linkedin}  alt ="Logo de Linkedin" className='Linkedin'/>
      <img  src= {Twitter}  alt ="Logo de Twitter" className='Twitter'/>
      <img src= {Discord}  alt ="Logo de Discord" className='Discord'/>
</section>
</section>
<section>
<section className='Partie-cinq'>
<section className='Mentions'> 
<h3>Mentions légales</h3>
<p>Mentions légales</p>
<p>Politique de confidentialté </p>
<p>Conditions d'utilisation</p>
</section>
</section>
</section>
</section>

</section>
    )
}




export default Footer;