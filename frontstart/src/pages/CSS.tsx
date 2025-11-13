import React from "react";
import CSSLogo from '../assets/images/CSS.png';
import './CSS.css'





function CSS () {


return(

 <section>
<section>
<h1>Cours de CSS</h1>
<img src ={CSSLogo} alt= "Logo de CSS" className="Image CSS" />

</section>
<h3>CSS: Mettre en forme le contenu</h3>
<p>CSS (pour Cascading Style Sheets en anglais, qu'on peut traduire en « feuilles de style en cascade ») est le code utilisé pour mettre en forme une page web. 
 Cet article vous guide à travers les bases de CSS : comment cela fonctionne et comment améliorer l'apparence et la présentation de la structure de contenu que vous avez créée dans l'article précédent.</p>

<section>
<h3>Qu'est-ce que CSS?</h3>
<p>

Comme le HTML, CSS n'est pas un langage de programmation. Ce n'est pas non plus un langage de balisage. CSS est un langage de feuille de style. 
CSS sert à mettre en forme les éléments HTML : vous sélectionnez les éléments à mettre en forme et vous définissez des valeurs pour leurs propriétés de style, ce qui détermine leur apparence.</p>
</section>
<section>
<h3> Appliquer du CSS à votre HTML</h3>
<p>Lorsque vous utilisez CSS, la première chose à vérifier est que votre CSS est bien appliqué à votre HTML. 
    Dans cette section, nous allons ajouter une feuille de style CSS à votre dossier mon-premier-site et l'appliquer à votre page.</p>

</section>
 </section>

)


}


export default CSS;