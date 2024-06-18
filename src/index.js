import '../styles/main.css' 
import logo from '../assets/logo.png'


console.log('Hello');

const logoContainer = document.querySelector("#LogoName")
  // Add the image to our existing div.
  const myLogo = new Image();
  myLogo.src = logo;

  const piscesTitle = document.createElement('h1');
  piscesTitle.innerText = 'Pisces Coffee Hub';

  myLogo.classList.add('logo');

  logoContainer.appendChild(myLogo);
  logoContainer.appendChild(piscesTitle);