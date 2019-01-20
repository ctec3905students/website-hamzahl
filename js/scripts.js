'use strict';

const navToggle = document.getElementById('navbar-toggle');
const nav = document.getElementById('nav-menu');
const btnScrollTop = document.getElementById('scroll-top'); 

navToggle.addEventListener('click', () => {
  nav.classList.toggle('active')

  navToggle.classList.toggle('toggle');
  console.log('burger clicked');
});

window.addEventListener('scroll', () => {
  // if top of page is larger that 140px
  if (document.documentElement.scrollTop > 140) {
    document.getElementById('scroll-top').style.display = "block";
  } else {
    document.getElementById('scroll-top').style.display = "none";
  }
});

btnScrollTop.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

console.log('Javascript Works.');
