const usernameInput = document.getElementById('username');
const usernameError = document.getElementById('usernameError');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');
const passwordInput = document.getElementById('password');
const passwordError = document.getElementById('passwordError');
const confirmPasswordInput = document.getElementById('confirmPassword');
const confirmPasswordError = document.getElementById('confirmPasswordError');

const registrationForm = document.getElementById('registrationForm');
const finalConfirm = document.getElementById('finalConfirm');

const removeUsernameFromStorage = document.getElementById('removeUsernameFromStorage');

let usernamestored = null;
let finalValidation = {username: false, email: false, password: false, confirmpassword: false};

usernameInput.addEventListener('input', (event) => {
  //console.log('username aEL triggered');
  // We are explicitly instructed to use 'input'. Selecting the field then moving away, or even pressing enter, or pressing submit on the form, does not trigger this event listener.  Only when a character is entered does this trigger.  I suppose I could put in an event listener for blur or something too but eh.
  if (usernameInput.validity.valueMissing) {
    finalValidation.username = false;
    usernameInput.setCustomValidity(`Please enter a user name, like 'ranchpizzalover1'`);
  } else {
    finalValidation.username = true;
    usernameInput.setCustomValidity('');
  }
  usernameError.textContent = usernameInput.validationMessage;
});
emailInput.addEventListener('input', (event) => {
  if (emailInput.validity.valueMissing) {
    finalValidation.email = false;
    emailInput.setCustomValidity(`Please enter an email, like 'ranchpizzalover1@pizzalovers.com'`);
  } else if (emailInput.validity.typeMismatcch) {
    finalValidation.email = false;
    emailInput.setCustomValidity('Please enter a valid email address.')
  } else {
    finalValidation.email = true;
    emailInput.setCustomValidity('');
  }
  emailError.textContent = emailInput.validationMessage;
});
passwordInput.addEventListener('input', (event) => {
  if (passwordInput.validity.valueMissing) {
    finalValidation.password = false;
    passwordInput.setCustomValidity(`Please enter a password at least 8 characters long, including an uppercase, lowercase, and number.`);
  } else if (passwordInput.validity.tooShort) {
    finalValidation.password = false;
    passwordInput.setCustomValidity('Please enter a password of at least 8 characters.');
  } else if (passwordInput.validity.patternMismatch) {
    finalValidation.password = false;
    passwordInput.setCustomValidity('Pleae enter a password with at least one uppercase, one lowercase, and one number.');
  } else {
    finalValidation.password = true;
    passwordInput.setCustomValidity('');
  }
  passwordError.textContent = passwordInput.validationMessage;
});
confirmPasswordInput.addEventListener('input', (event) => {
  if (confirmPasswordInput.value !== passwordInput.value) {
    finalValidation.confirmpassword = false;
    confirmPasswordInput.setCustomValidity('Please re-enter password; passwords do not currently match.')
  } else {
    finalValidation.confirmpassword = true;
    confirmPasswordInput.setCustomValidity('');
  }
  confirmPasswordError.textContent = confirmPasswordInput.validationMessage;
});

registrationForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (finalValidation.username && finalValidation.email && finalValidation.password && finalValidation.confirmpassword) {
    finalConfirm.textContent = "Input OK."
  } else {
    finalConfirm.textContent = "Input not valid."
  }
  localStorage.setItem('lab52', usernameInput.value);
});

removeUsernameFromStorage.addEventListener('click', (event) => {
  localStorage.removeItem('lab52');
});


const retrieveData = () => {
  try {
    //usernamestored = JSON.parse(localStorage.getItem('lab52')); // technically JSON.parse not needed as it's a string, but eh.
    usernamestored = localStorage.getItem('lab52');
  } catch (errorMessage) {
    console.error('Error parsing settings from localStorage:', errorMessage);
    usernamestored = null; // or set to default settings
  }

  if (usernamestored) {
    username.value = usernamestored;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  retrieveData();
});