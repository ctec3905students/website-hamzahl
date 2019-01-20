'use strict';

const navToggle = document.getElementById('navbar-toggle');
const nav = document.getElementById('nav-menu');
const btnScrollTop = document.getElementById('scroll-top'); 

navToggle.addEventListener('click', () => {
  nav.classList.toggle('active')

  navToggle.classList.toggle('toggle');
  console.log('burger clicked');
});

window.onscroll = () => { scrollFunction();
};

function scrollFunction() {
  // if 100px from top then only show scroll to top button
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById('scroll-top').style.display = "block";
  } else {
    console.log('still at top');
  }
};

btnScrollTop.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

console.log('Javascript Works.');
