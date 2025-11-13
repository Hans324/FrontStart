
import React from 'react';
import HTMLLogo from '../assets/images/HTML5.png';
import'./HTML.css'

function HTML() {


return(
<section>
<section>
<h1>Cours de HTML</h1>
<img src= {HTMLLogo}  alt ="Logo de HTML" className='HTML-image'/>

<h2>Introduction</h2>
<p>HTML (pour HyperText Markup Language en anglais,qu'on peut traduire en "langage de balisage hypertexte") est le langage utilisé 
pour structurer une page web et son contenu. On peut par exemple organiser le contenu en un ensemble de paragraphes, une liste d'éléments, utiliser des 
images ou des tableaux de données.
</p>
<p>Dans cette page, tu connaitras les bases essentielles de HTML.</p>
<p></p>

</section>

<section>
<h3>Créer ton premier document HTML</h3>
<p>Voyons comment les éléments individuels sont combinés pour former une page HTML. Dans cette section, 
    vous allez créer un fichier HTML de base et examiner sa composition.
</p>
<p>
    A. Dans ton dossier, (tu peux créer ton propre  nom pour ce dossier); créez un novueau dossier nommée , par exemple, mon-premier-site.
    B. A l'interieur de mon-premier-site, créez un nouveau fichier appelé index.html, et insérez-y le code suivant exactement comme indiqué :

</p>

<p>Voici ce que chaque ligne de code dit:</p>

<p>!doctype html : Le docytype est un préambule obligatoire. Aux débuts de HTML( vers 1991/92), les doctypes
   servaient de liens vers des ensembles de régles qu'une page HTML devait suivre pour être considérée comme correcte,
   ce qui pouvait permettre une vérification automatique des erreus et d'autres fonctionnalités utiles.
   Aujourd'hui, ils ne servent plus à grand-chose et sont simplement nécessaires pour que votre document se comporte correctement. C'est tout ce que vous devez savoir pour l'instant.
     </p>

<p> L'élément "html" englobe tout le contenu de la page et est parfois appelé élément racine. Il inclut aussi l'attribut lang, qui définit la langue principale du document.</p>
<p> L'élément head sert de conteneur pour tout ce que vous souhaitez inclure dans la page HTML qui n'est pas du contenu affiché aux visiteur·euse·s. Cela inclut par exemple des mots-clés et une description de la page pour les résultats de recherche, du CSS pour la mise en forme, des déclarations d'encodage de caractères, etc.</p>

<p> meta charset="utf-8" : Cet élément définit l'encodage de caractères que votre document doit utiliser, à savoir UTF-8, qui inclut la plupart des caractères de la grande majorité des langues écrites.
    Il peut donc gérer tout contenu textuel que vous pourriez y placer. Il n'y a aucune raison de ne pas le définir, cela permet d'éviter certains problèmes plus tard.</p>

<p> meta name="viewport" content="width=device-width" : Cet élément viewport garantit que la page s'affiche à la largeur de la zone d'affichage du navigateur, empêchant les navigateurs mobiles d'afficher des pages plus larges que la zone d'affichage puis de les réduire.
    </p>
<p>title: L'élément title définit le titre de votre page, qui apparaît dans l'onglet du navigateur où la page est chargée. Il sert aussi à décrire la page lorsqu'on l'ajoute aux favoris.</p>
<p> body : L'élément body contient tout le contenu que vous souhaitez afficher aux utilisateur·ice·s web lorsqu'ils visitent votre page, qu'il s'agisse de texte, d'images, de vidéos, de jeux, de pistes audio, etc. Pour l'instant, il ne contient qu'un seul élément img, mais nous ajouterons plus de contenu par la suite.</p>

<p>Note : La plupart des éléments HTML se composent d'une balise ouvrante par exemple, body, suivie du contenu de l'élément, puis d'une balise fermante par exemple, body. Certains éléments HTML possèdent aussi des attributs, qui contiennent des réglages ou des informations supplémentaires sur l'élément — voyez par exemple charset, name et src dans notre exemple de code.</p>
</section>

<section>
<h3>Images</h3>

</section>

<section>
<h3>Titres</h3>

</section>
<section>
<h3>Paragraphes</h3>

</section>
<section>
<h3>Listes</h3>


</section>
<h3>Créer des liens</h3>

<h3>Conclusion</h3>
</section>





)



}


export default HTML;