import React from 'react';
import react, { useState } from 'react';
import "./contact.css";



function Contact () {
const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [lastname,setLastname] = useState("")
return (

<section>


<h1 className='Titre-un'>Nous Contacter</h1>
<section>
<h2 className='Titre-deux'>Contact</h2>
<form className='contact-formulaire'>
    <section className='section-tableau'>
    <fieldset className='tableau'>
        <section className='tableau-1'>
<label className='contact-nom'>
<p className='paragraphe-1'>Votre nom : </p>
<input

className='Nom'
type="name"
id="name"
value={name}
onChange={(e) => setName (e.target.value)}

/>

</label>
</section>
<section className='tableau-2'>
<label className='contact-prenom'>
  <p className='paragraphe-2'>  Votre prénom : </p>
<input
className='prenom'
type="lastName"
value={lastname}
onChange={ (e) => setLastname (e.target.value)}

/>


</label>
</section>
<section className='tableau-3'>
<label className='contact-email'>
   <p className='paragraphe-3'> Votre mail: </p>
<input
className='mail'
type="email"
value={email}
onChange={(e)  => setEmail(e.target.value)}
/>
</label>
</section>
<label  className='contact-password'>
  <p className='paragraphe-4'>  Mot de passe : </p>

<input 
className='password'
type="password"
value={password}
onChange={(e)  => setPassword(e.target.value) }
/>
</label>
<section className='button'>
<button type='submit' className='Contact-button'>submit</button>
</section>
</fieldset>

</section>  
</form>

</section>





</section>





);






}

export default Contact;