import "./css/style.scss"
import "./js_vendor/custom_select.js"

console.log(`Hello wp99288829`);

//menu mobile
const menuMobile = document.getElementById('menu-mobile');
const arrow = document.getElementById('arrow');
const menu = document.getElementById('menu');

menuMobile.onclick = function (){
  arrow.classList.toggle('open');
  menu.classList.toggle('open');
};

//