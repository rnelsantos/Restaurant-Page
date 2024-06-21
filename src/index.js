import '../styles/main.css' 
import { loadHome } from './home';
import { loadMenu } from './menu';
import { loadAbout } from './about';



console.log('Hello');


loadHome(); //initial page load
//page.resetDisplay(); //for mock template  html



//event listener for tab pages
const allNavTabs = document.querySelectorAll("nav");
allNavTabs.forEach((nav) =>
nav.addEventListener("click", (e) => {
 let currentTab = String(e.target.id);
  console.log(e.target.id);

  switch (currentTab.toLowerCase()) {  
    case "home":
        page.resetDisplay();
        loadHome();
      break;
      case "menu":
        page.resetDisplay();
        loadMenu();
        page.toggleControl();

      break;
      case "about":
        page.resetDisplay();
        loadAbout();
      break;
      default:
        //
  };
})
);

function loadToggle(){
//for food/drink toggle switch
const chooseOption = document.querySelectorAll(".option");
const slide = document.querySelector(".switchFood");


chooseOption.forEach((opt) =>
opt.addEventListener("click", (e) => {
  chooseOption.forEach((opt) =>  {opt.classList.remove('chosenMenu');} );
  let option= e.target.dataset.index;
  console.log(String(option));
   
  if (String(option) === "Drinks" ){
    slide.classList.add('switchDrink');
    opt.classList.add('chosenMenu');
  }
  else {
    slide.classList.remove('switchDrink');
    opt.classList.add('chosenMenu');
  };

})
);

};

const page = (function () {
  const content = document.querySelector("#content");
  const firstChild= document.querySelector(".firstChild")  // apprently this only get read  once.

  
  
  const resetDisplay = () => {if( document.querySelector(".firstChild") != null){content.removeChild(document.querySelector(".firstChild"))}}
  
  const toggleControl = () => {
    const chooseOption = document.querySelectorAll(".option");
    const slide = document.querySelector(".switchFood");
    chooseOption.forEach((opt) =>
      opt.addEventListener("click", (e) => {
        chooseOption.forEach((opt) =>  {opt.classList.remove('chosenMenu');} );
        let option= e.target.dataset.index;
        console.log(String(option));
          if (String(option) === "Drinks" ){
            slide.classList.add('switchDrink');
            opt.classList.add('chosenMenu')}
          else {
            slide.classList.remove('switchDrink');
            opt.classList.add('chosenMenu')};      
      })
      );
  }

  return {resetDisplay,toggleControl}
  
  }
  )();




/*
  function loadToggle(){
    //for food/drink toggle switch
    const chooseOption = document.querySelectorAll(".option");
    const slide = document.querySelector(".switchFood");
    
    
    chooseOption.forEach((opt) =>
    opt.addEventListener("click", (e) => {
      chooseOption.forEach((opt) =>  {opt.classList.remove('chosenMenu');} );
      let option= e.target.dataset.index;
      console.log(String(option));
       
      if (String(option) === "Drinks" ){
        slide.classList.add('switchDrink');
        opt.classList.add('chosenMenu');
      }
      else {
        slide.classList.remove('switchDrink');
        opt.classList.add('chosenMenu');
      };
    
    })
    );
    
    };

    */