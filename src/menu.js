


function loadMenu() {


const content = document.querySelector ('#content');
const main = document.querySelector('main');
const menuContainer = document.createElement("div");
menuContainer.classList.add('firstChild');
content.appendChild(menuContainer);

//remove previous tab highlight
const selected = document.querySelector('.select');
if (selected!=null){ selected.classList.remove("select"); console.log(selected);};   
//Highlight current page tab
const menu = document.querySelector('#menu');
menu.classList.add('select');
}

    export {loadMenu};