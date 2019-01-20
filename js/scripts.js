'use strict';

const navToggle = document.getElementById('navbar-toggle');
const nav = document.getElementById('nav-menu');
const htmlProgressBar = document.getElementById('progress-html');
const phpProgressBar = document.getElementById('progress-php')

const skillProgressBars = document.getElementsByTagName('progress');
const testBtn = document.getElementById('test');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('active')

  navToggle.classList.toggle('toggle');
  console.log('burger clicked');
});

// Sets the width and background for the skill bars
const setSkillBar = () => {
  [...document.querySelectorAll('.skill-bar')].forEach((e) => {
    // Set inner div to the % specified in span text
    e.children[0].style.width = e.children[0].children[0].innerText;
    e.children[0].style.backgroundColor = 'red';
  });
} 

setSkillBar();

console.log('Javascript Works.');
