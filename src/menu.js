


function loadMenu() {

//attach menu container to content
const content = document.querySelector ('#content');
const main = document.querySelector('main');
const menuContainer = document.createElement("div");
menuContainer.classList.add('firstChild');
content.appendChild(menuContainer);

//append menuoption toggle
const chooseContainer = document.createElement("div");
chooseContainer.classList.add("choose-container");
        const switchMenu = document.createElement("div");
        switchMenu.classList.add("switchFood");
        const food = document.createElement("div");
        food.classList.add("option");
        food.classList.add("chosenMenu");
        food.innerText = "Food"
        food.setAttribute("data-index", "Food");
        const drinks = document.createElement("div");
        drinks.classList.add("option");
        drinks.innerText = "Drinks";
        drinks.setAttribute("data-index", "Drinks");
    chooseContainer.appendChild(switchMenu);
    chooseContainer.appendChild(food);
    chooseContainer.appendChild(drinks);
    menuContainer.appendChild(chooseContainer);

//remove previous tab highlight
const selected = document.querySelector('.select');
if (selected!=null){ selected.classList.remove("select"); console.log(selected);};   
//Highlight current page tab
const menu = document.querySelector('#menu');
menu.classList.add('select');
}

    export {loadMenu};