'use strict';

const navToggle = document.getElementById('navbar-toggle');
const nav = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('active')
  navToggle.classList.toggle('toggle');
});

const setElementDisplay = (element, display) => {
  document.getElementById(element).style.display = display;
}

window.addEventListener('scroll', () => {
  // if top of page is larger that 140px
  if (document.documentElement.scrollTop > 140) {
    setElementDisplay('scroll-top', 'block');
  } else {
    setElementDisplay('scroll-top', 'none');
  }
});

btnScrollTop.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

// Helper function that can be reused across multiple functions
const setElementStyle = (element, styles) => {
  Object.assign(element.style, styles);
}

// Sets the width and background for the skill bars
const setSkillBar = () => {
  [...document.querySelectorAll('.skill-bar')].forEach((e) => {
    const innerSkillBar = e.children[0];
    const innerSkillBarSpan = innerSkillBar.children[0];
    const styles = { backgroundColor: 'red', width: innerSkillBarSpan.innerText};

    setElementStyle(innerSkillBar, styles);
  });
} 


setSkillBar();