{/* <div class="container">
    <h1>Register</h1>
    <form id="registrationForm" novalidate>
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username">
        <span class="error-message" id="usernameError"></span>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <span class="error-message" id="emailError"></span>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password">
        <small>Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, and a number.</small>
        <span class="error-message" id="passwordError"></span>
      </div>
      <div class="form-group">
        <label for="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword">
        <span class="error-message" id="confirmPasswordError"></span>
      </div>
      <button type="submit">Register</button>
    </form>
  </div> */}

const registrationForm = document.getElementById('registrationForm');

registrationForm.addEventListener('submit', (event) => {

});

registrationForm.addEventListener





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
const username = document.getElementById('username');
let usernamestored = null;



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