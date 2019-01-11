'use strict';

const navToggle = document.getElementById('navbar-toggle');
const nav = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('active')
  console.log('burger clicked');
});

console.log('Javascript Works.');
