import '../styles/main.css' 
import { loadHome } from './home';
import { loadMenu } from './menu';
import { loadAbout } from './about';



console.log('Hello');


loadHome(); //initial page load

const page = (function () {
const content = document.querySelector("#content");
const firstChild= document.querySelector(".firstChild")  // apprentlt this only get read  once.


const resetDisplay = () => {if( document.querySelector(".firstChild") != null){content.removeChild(document.querySelector(".firstChild"))}}

return {resetDisplay}

}
)();







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
