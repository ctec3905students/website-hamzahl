'use strict';

// Element IDs
const navToggle = document.getElementById('navbar-toggle');
const nav = document.getElementById('nav-menu');
const btnScrollTop = document.getElementById('scroll-top');
const userName = document.getElementById('user-name');
const userEmail = document.getElementById('user-email');
const userMessage = document.getElementById('user-message');
const contactForm = document.getElementById('contact-form');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('active')
  navToggle.classList.toggle('toggle');
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
// Sets the width and background for the skill bars
const setSkillBar = () => {
  [...document.querySelectorAll('.skill-bar')].forEach((e) => {
    // Set inner div to the % specified in span text
    e.children[0].style.width = e.children[0].children[0].innerText;
    e.children[0].style.backgroundColor = 'red';
  });
}


// Validation methods for form
const isEmpty = (inputField) => {
  return (inputField.value === '' ? true : false);
}

const isValidName = (nameField) => {
  const re = /^[a-z ,.'-]+$/i;
  return re.test(nameField.value);
}

const isValidEmail = (emailField) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(emailField.value);
}

const invalidateInput = (message, field) => {
  alert(message);
  field.value = '';
  field.focus();
}

// else clauses aren't needed for this function
const validateForm = () => {
  if (isEmpty(userName)) {
    invalidateInput('Please enter a name', userName);
  } else if (!isValidName(userName)) {
    invalidateInput('Named not valid. Try again.', userName);
  }

  if (isEmpty(userEmail)) {
    invalidateInput('Please enter an email', userEmail)
  } else if (!isValidEmail(userEmail)) {
    invalidateInput('Email not valid. Try again.', userEmail);
  }

  if (isEmpty(userMessage)) {
    invalidateInput('Please enter a message', userMessage);
  }
}

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  validateForm();
  if (isEmpty(userName) || isEmpty(userEmail) || isEmpty(userEmail)) {
    alert('Form not submitted: Input fields are empty.');
  } else {
    alert('Form Submitted.');
  }
});

setSkillBar();