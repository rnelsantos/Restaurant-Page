//import food menu images
import food1 from '../assets/food/1.png'
import food2 from '../assets/food/2.png'
import food3 from '../assets/food/3.png'
import food4 from '../assets/food/4.png'
import food5 from '../assets/food/5.png'
import food6 from '../assets/food/6.png'
import food7 from '../assets/food/7.png'


//import drink menu iamges
import drinks1 from '../assets/drinks/1.png'
import drinks2 from '../assets/drinks/2.png'
import drinks3 from '../assets/drinks/3.png'
import drinks4 from '../assets/drinks/4.png'
import drinks5 from '../assets/drinks/5.png'
import drinks6 from '../assets/drinks/6.png'
import drinks7 from '../assets/drinks/7.png'
import drinks8 from '../assets/drinks/8.png'
import drinks9 from '../assets/drinks/9.png'
import drinks10 from '../assets/drinks/10.png'
import drinks11 from '../assets/drinks/11.png'
import drinks12 from '../assets/drinks/12.png'
import drinks13 from '../assets/drinks/13.png'
import drinks14 from '../assets/drinks/14.png'
import drinks15 from '../assets/drinks/15.png'


let foodArray =[food1, food2, food3, food4, food5, food6, food7];
let drinksArray = [
    drinks1,
    drinks2, 
    drinks3, 
    drinks4,
    drinks5,
    drinks6,
    drinks7,
    drinks8,
    drinks9,
    drinks10,
    drinks11,
    drinks12,
    drinks13,
    drinks14,
    drinks15,
];

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



function appendMenu(menuURL) {
    const menuIMG = new Image();
    menuIMG.src = menuURL;
    foodMenu.appendChild(menuIMG);
};




//Load foodMenu images at food folder
const foodMenu = document.createElement("div");
foodMenu.classList.add('foodMenu');

foodArray.forEach(function(menuURL) {
    const menuIMG = new Image();
    menuIMG.src = menuURL;
    foodMenu.appendChild(menuIMG);
});


//Load drinksMenu images at food folder
const drinksMenu = document.createElement("div");
drinksMenu.classList.add('drinksMenu');
drinksMenu.classList.add('hide');

drinksArray.forEach(function(menuURL) {
    const menuIMG = new Image();
    menuIMG.src = menuURL;
    drinksMenu.appendChild(menuIMG);
});




menuContainer.appendChild(foodMenu);
menuContainer.appendChild(drinksMenu);


};



    export {loadMenu};        
    
    
    
    
   