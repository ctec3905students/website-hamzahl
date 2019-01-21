'use strict';

/* 
  Helper Functions
*/
const setElementDisplay = (element, display) => {
  document.getElementById(element).style.display = display;
}

const setElementStyle = (element, styles) => {
  Object.assign(element.style, styles);
}

const getCssVariable = (cssVariable) => {
  return getComputedStyle(document.body).getPropertyValue(cssVariable);
}

/*
  Validation Helper Functions
*/
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

/*
  Navbar toggle feature for mobile screens
*/
const navToggle = document.getElementById('navbar-toggle');
const nav = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('active')
  navToggle.classList.toggle('toggle');
});

/* 
  Scroll to top feature
*/
const btnScrollTop = document.getElementById('scroll-top');
window.addEventListener('scroll', () => {
  // if top of page is more that 140px
  if (document.documentElement.scrollTop > 140) {
    setElementDisplay('scroll-top', 'block');
  } else {
    setElementDisplay('scroll-top', 'none');
  }
});

btnScrollTop.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

/* 
  Set Skill progres bar
*/
const setSkillBar = () => {
  [...document.querySelectorAll('.skill-bar')].forEach((e) => {
    const innerSkillBar = e.children[0];
    const innerSkillBarSpan = innerSkillBar.children[0];
    const styles = {
      backgroundColor: getCssVariable('--second-accent-color'),
      color: getCssVariable('--main-text-color'),
      padding: '.2em',
      width: innerSkillBarSpan.innerText
    };
    setElementStyle(innerSkillBar, styles);
  });
}

/*
  Local Storage
*/
const userName = document.getElementById('user-name');
const userEmail = document.getElementById('user-email');
let nameStored = localStorage.getItem('name');
let emailStored = localStorage.getItem('email');
const populateLocalStorageName = () => {
  if (!isEmpty(userName)) {
    console.log('name changed');
    localStorage.setItem('name', userName.value);
  }
}
const populateLocalStorageEmail = () => {
  if (!isEmpty(userEmail)) {
    console.log('emauk changed');
    localStorage.setItem('email', userEmail.value);
  }
}

const prePopulateForm = () => {
  if (nameStored) {
    userName.value = nameStored;
  }
  if (emailStored) {
    userEmail.value = emailStored;
  }
}

/* 
  Contact Form 
*/
const contactForm = document.getElementById('contact-form');
const userMessage = document.getElementById('user-message');

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


contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  validateForm();
  if (isEmpty(userName) || isEmpty(userEmail) || isEmpty(userMessage)) {
    alert('Form not submitted: Field is missing.');
  } else {
    alert('Form Submitted.');
  }
  populateLocalStorageEmail();
  populateLocalStorageName();
});

/*
  Greet user in about me section
*/
const userSpan = document.getElementById('your-name');
const greetUser = () => {
  if (nameStored) {
    userSpan.innerText = ` again ${nameStored}`;
  } else {
    userSpan.innerText = ' stranger';
  }
}

/* 
  Fortnite API
*/
const fortniteStats = () => {
  const fortniteUsername = 'xHamzah'
  const fortniteUserId = `https://fortnite-public-api.theapinetwork.com/prod09/users/id?username=${fortniteUsername}`
  fetch(fortniteUserId)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // second url is dependent on uid which is retreieved from the first url
      let fortniteUserStats = `https://fortnite-public-api.theapinetwork.com/prod09/users/public/br_stats?user_id=${data.uid}&platform=pc`;
      return fetch(fortniteUserStats);
    }).then((response) => {
      return response.json();
    }).then((data) => {
      document.getElementById('fortnite-kills').innerText = `Kills: ${data.totals.kills}`;
      document.getElementById('fortnite-wins').innerText = `Wins: ${data.totals.wins}`;
      document.getElementById('fortnite-matches').innerText = `Matches: ${data.totals.matchesplayed}`;
      document.getElementById('fortnite-kd').innerText = `KD: ${data.totals.kd}`;
    });
}

/*
  Fortnite Modal
*/
const btnOpenModal = document.getElementById('btn-open-modal');
const btnCloseModal = document.getElementById('btn-close-modal');
const fortniteModal = document.getElementById('fortnite-modal');

btnOpenModal.addEventListener('click', () => {
  fortniteModal.showModal();
  fortniteStats();
});

btnCloseModal.addEventListener('click', () => {
  fortniteModal.close();
});

// click anywhere outside the modal to close it
window.addEventListener('click', (e) => {
  if (e.target == fortniteModal) {
    fortniteModal.close();
  }
});

// function calls
greetUser();
prePopulateForm();
setSkillBar();