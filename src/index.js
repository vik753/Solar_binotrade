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

//block two tabs toogle
const tabHeader1 = document.getElementById('tab-header1');
const tabHeader2 = document.getElementById('tab-header2');
const tabHeader3 = document.getElementById('tab-header3');
const tabHeader4 = document.getElementById('tab-header4');
let tabHeaders = [tabHeader1, tabHeader2, tabHeader3, tabHeader4];
const tab1 = document.getElementById('tab1');
const tab2 = document.getElementById('tab2');
const tab3 = document.getElementById('tab3');
const tab4 = document.getElementById('tab4');
let tabs = [tab1, tab2, tab3, tab4];

tabHeader1.onclick = function () {
  tabTrigger(this);
}
tabHeader2.onclick = function () {
  tabTrigger(this);
}
tabHeader3.onclick = function () {
  tabTrigger(this);
}
tabHeader4.onclick = function () {
  tabTrigger(this);
}

let tabTrigger = function (el) {
  console.log(el);
  tabs.forEach(function (e) {
    e.classList.remove('active');
  });
  el.classList.add('active');
  if (el === tabHeader1) {
    tab1.classList.add('active');
  } else if (el === tabHeader2) {
    tab2.classList.add('active');
  } else if (el === tabHeader3) {
    tab3.classList.add('active');
  } else {
    tab4.classList.add('active');
  }
  tabHeaders.forEach(function (e) {
    e.classList.remove('active');
  });
  el.classList.add('active');
}
