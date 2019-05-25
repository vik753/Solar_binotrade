import "./css/style.scss";

let device = null;

//console.log(`Hello`);

//menu mobile
const menuMobile = document.getElementById('menu-mobile');
const arrow = document.getElementById('arrow');
const menu = document.getElementById('menu');

menuMobile.onclick = function (){
  arrow.classList.toggle('open');
  menu.classList.toggle('open');
};


//media for js
ssm.addState({
  id: 'mobile',
  query: '(max-width: 768px)',
  onEnter: function() {
    initMobile();
  }
});

