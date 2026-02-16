import React, { useState, useEffect } from "react";
import "./App.css";
import photo from './images/photo.JPG';
import instagram from './images/instagram.svg';
import github from './images/github.svg';
import linkedin from './images/linkedin.svg';



function App() {
  const [message, setMessage] = useState("");

  const contact = async() =>{
    try{
    fetch("http://localhost:8000/contact")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
    } catch(e){
        console.error("Error on server", error);
    }
  }

  return (
    <div class= 'card'>
    <div class='photo-container'>
        <img src={photo} alt=' profile photo' class='photo'/>
    </div>
    <h1 class='name'>Khrystyna
        <span class='handwritten'>Hrytsiv</span>
    </h1>
    <p class='description'>Junior Frontend Developer</p>
    <div class='social-links'>
        <a href="https://www.instagram.com/khrystyna_hrytsiv?igsh=YTdwY2tudW5jeG5v/" class='social-link' title='instagram'>
            <img src={instagram} alt="instagram"/>
        </a>
        <a href="https://github.com/KhrystynaHrytsiv/" class='social-link' title='github'>
            <img src={github} alt="github"/>
        </a>
        <a href="https://www.linkedin.com/in/khrystyna-hrytsiv-75b35038a/" class='social-link' title='linkedin'>
            <img src={linkedin} alt="linkedin"/>
        </a>
    </div>

    <button class="contact" onClick={contact}>Contact with me</button>
    <p id='status'>{message}</p>
</div>
  );
}

export default App;
