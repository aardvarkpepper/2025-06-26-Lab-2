/**

Implement real-time input validation using JavaScript event listeners (input event).
Use HTML5 validation attributes (e.g., required, type, minlength, pattern).
Apply the JavaScript Constraint Validation API to check validity and display custom error messages.
Dynamically create and display error messages next to input fields.
Handle the form submit event, prevent default submission, and perform final validation.
Use localStorage to save and retrieve simple form data (e.g., username).

In script.js, implement the core validation logic.
Select all necessary DOM elements (form, inputs, error message spans).
Load saved username: On page load, check if a username is saved in localStorage. If so, pre-fill the username field.
Real-time validation: Add input event listeners to each field.
Check validity using the Constraint Validation API (inputElement.validity).
For the “Confirm Password” field, explicitly check if it matches the “Password” field.
Display appropriate custom error messages in the corresponding <span> elements. Clear messages if valid.
Form submission: Add a submit event listener to the form.
Call event.preventDefault().
Perform a final validation check on all fields.
If all fields are valid:
Display a success message (e.g., an alert or update a status message on the page).
Save the username to localStorage.
Optionally, reset the form.
If any field is invalid, ensure error messages are displayed and focus on the first invalid field.

Test Basic Registration: Fill out all fields with valid data and submit the form. Verify the success message and that the username is saved in localStorage (check your browser’s Developer Tools > Application > Local Storage).
Test Username Validation:
Try submitting with an empty username.
Enter a username that is too short.
Verify error messages appear in real-time as you type (or on blur/submit).
Test Email Validation:
Try submitting with an empty email.
Enter an invalid email format (e.g., “test@”, “test.com”).
Test Password Validation:
Try submitting with an empty password.
Enter a password that is too short.
Enter a password that doesn’t meet the pattern (e.g., all lowercase, no numbers).
Ensure the “Confirm Password” field shows an error if it doesn’t match the password.
Test Local Storage Persistence: After a successful registration, refresh the page. The username field should be pre-filled with the value you entered.
Edge Cases: Think about what happens if a user tries to bypass validation (though client-side validation is mainly for UX, server-side is for security). What happens if localStorage is full or disabled (for this lab, we assume it works, but it’s a real-world consideration)?

*/

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
});

removeUsernameFromStorage.addEventListener('click', (event) => {
  // localStorage.setItem('hamster', 'whatever');
  // localStorage.getItem('hamster');
  // localStorage.removeItem('hamster');
});


const retrieveData = () => {
  try {
    usernamestored = JSON.parse(localStorage.getItem('appSettings')); // technically JSON.parse not needed as it's a string, but eh.
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
  // fillTable(tasklist);
});