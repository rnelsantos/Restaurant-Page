


function loadAbout() {

    const content = document.querySelector ('#content');
    const main = document.querySelector('main');
    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add('firstChild');
    content.appendChild(aboutContainer);



    //remove previous tab highlight
    const selected = document.querySelector('.select');
    if (selected!=null){ selected.classList.remove("select"); console.log(selected);};
    //Highlight current page tab
    const menu = document.querySelector('#about');
    about.classList.add('select');
    }

    export {loadAbout};