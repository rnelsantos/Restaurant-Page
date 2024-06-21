import '../styles/main.css' 
import logo from '../assets/logo.png'


console.log('Hello');



//Create logo and title container div
const main = document.querySelector('main');
const logoContainer = document.createElement("div");
logoContainer.classList.add('full-bleed');
logoContainer.id = "LogoName";
main.appendChild(logoContainer);

// Add the image to our existing div.
const myLogo = new Image();
myLogo.src = logo;
myLogo.classList.add('logo');
logoContainer.appendChild(myLogo);

// Add title text
const piscesTitle = document.createElement('h1');
piscesTitle.innerText ='Pisces Coffee Hub';
piscesTitle.classList.add('titleText');
logoContainer.appendChild(piscesTitle);

//Highlight current page tab
const home = document.querySelector('#home');
home.classList.add('select');
