import logo from '../assets/logo.png'


function loadHome() {
    //Create logo and title container div
    const content = document.querySelector ('#content');
    const main = document.querySelector('main');
    const logoContainer = document.createElement("div");
    logoContainer.classList.add('full-bleed');
    logoContainer.classList.add('firstChild');
    logoContainer.id = "LogoName";
    content.appendChild(logoContainer);
    
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
    
    //remove previous tab highlight
    const selected = document.querySelector('.select');
    if (selected!=null){ selected.classList.remove("select"); console.log(selected);};
    //Highlight current page tab
    const home = document.querySelector('#home');
    home.classList.add('select');
    }

    export {loadHome};