'use strict';

// Element IDs
const navToggle = document.getElementById('navbar-toggle');
const nav = document.getElementById('nav-menu');
const btnScrollTop = document.getElementById('scroll-top');
const userName = document.getElementById('user-name');
const userEmail = document.getElementById('user-email');
const userMessage = document.getElementById('user-message');
const contactForm = document.getElementById('contact-form');
const userSpan = document.getElementById('your-name');

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
    const styles = {
      backgroundColor: 'red',
      width: innerSkillBarSpan.innerText
    };

    setElementStyle(innerSkillBar, styles);
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

const validateForm = () => {
  if (isEmpty(userName)) {
    invalidateInput('Please enter a name', userName);
  } else if (!isValidName(userName)) {
    invalidateInput('Named not valid. Try again.', userName);
  } else {
    populateLocalStorageName();
  }

  if (isEmpty(userEmail)) {
    invalidateInput('Please enter an email', userEmail)
  } else if (!isValidEmail(userEmail)) {
    invalidateInput('Email not valid. Try again.', userEmail);
  } else {
    populateLocalStorageEmail();
  }

  // else not required for this if statement
  if (isEmpty(userMessage)) {
    invalidateInput('Please enter a message', userMessage);
  }
}

/*
  Local Storage
*/
let nameStored = localStorage.getItem('name');
let emailStored = localStorage.getItem('email');
const populateLocalStorageName = () => {
  localStorage.setItem('name', userName.value);
}
const populateLocalStorageEmail = () => {
  localStorage.setItem('email', userEmail.value);
}

const prePopulateForm = () => {
  if (nameStored) {
    userName.value = nameStored;
  }
  if (emailStored) {
    userEmail.value = emailStored;
  }
}

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  prePopulateForm();
  validateForm();
  if (isEmpty(userName) || isEmpty(userEmail) || isEmpty(userEmail)) {
    alert('Form not submitted: Field is missing.');
  } else {
    alert('Form Submitted.');
  }
});

const greetUser = () => {
  if (nameStored) {
    userSpan.innerText = ` again ${nameStored}`;
  } else {
    userSpan.innerText = ' stranger';
  }
}


greetUser();
prePopulateForm();
setSkillBar();