import React from "react";
import CSSLogo from '../assets/images/CSS.png';
import './CSS.css'





function CSS () {


return(

 <section>
<section>
<h1 className="title-css">Cours de CSS</h1>
<img src ={CSSLogo} alt= "Logo de CSS" className="Image-CSS" />

</section>
<section className="text-body">
<h3>CSS: Mettre en forme le contenu</h3>
<p>CSS (pour Cascading Style Sheets en anglais, qu'on peut traduire en « feuilles de style en cascade ») est le code utilisé pour mettre en forme une page web. 
 Cet article vous guide à travers les bases de CSS : comment cela fonctionne et comment améliorer l'apparence et la présentation de la structure de contenu que vous avez créée dans l'article précédent.</p>

 <p>

Si on ajoute un peu de CSS, on peut changer l'apparence du HTML.
 L'extrait suivant sélectionne l'élément p et lui donne une police différente et un texte de couleur (color) rouge. 
 Il sélectionne ensuite tous les éléments li et leur donne une couleur de remplissage (background-color) vert-jaune, une bordure (border) noire pleine de 1 pixel, et une marge inférieure de 5 pixels :
</p>

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

<section>
<p> 1.Dans votre dossier mon-premier-site, créez un nouveau dossier appelé styles.</p>
  <p>  2. À l'aide d'un éditeur de texte, collez le CSS suivant dans un nouveau fichier, qui donnera à vos éléments p une couleur de texte rouge. 
    Il est utile de commencer par quelque chose comme ceci pour tester si votre feuille de style est bien appliquée à votre HTML.</p>
   <p> 3.Enregistrez le fichier dans le dossier styles sous le nom style.css.</p>
    <p>4.Ouvrez votre fichier index.html. Collez la ligne suivante dans l'en-tête HTML (entre les balises head et head) : </p>
</section>
</section>
<section>
  <h3>Comment intégrer le CSS</h3>
 </section>
</section>
 </section>

)


}


export default CSS;