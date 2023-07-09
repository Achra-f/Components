/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
const form = document.querySelector('form');
const email = document.getElementById('email');
const emailError = email.nextElementSibling;

const country = document.getElementById('country');
const countryError = country.nextElementSibling;

const zip = document.getElementById('zip');
const zipError = zip.nextElementSibling;

const password = document.getElementById('password');
const passwordError = password.nextElementSibling;

const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

window.addEventListener('load', () => {
  validateField(email, emailError, emailRegExp);
});

email.addEventListener('input', () => {
  validateField(email, emailError, emailRegExp);
});

country.addEventListener('input', () => {
  validateField(country, countryError);
});

zip.addEventListener('input', () => {
  validateField(zip, zipError);
});

password.addEventListener('input', () => {
  validateField(password, passwordError);
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  validateField(email, emailError, emailRegExp);
  validateField(country, countryError);
  validateField(zip, zipError);
  validateField(password, passwordError);

  const isValid = email.validity.valid
    && country.validity.valid
    && zip.validity.valid
    && password.validity.valid;

  if (!isValid) {
    event.preventDefault();
  }
});

function validateField(inputElement, errorElement, pattern = null) {
  if (inputElement.validity.valid) {
    errorElement.textContent = '';
    errorElement.className = 'error';
  } else {
    if (inputElement.validity.valueMissing) {
      errorElement.textContent = 'This field is required.';
    } else if (inputElement.validity.typeMismatch) {
      errorElement.textContent = 'Invalid value.';
    } else if (pattern && inputElement.validity.patternMismatch) {
      errorElement.textContent = 'Only letters are allowed.';
    } else {
      errorElement.textContent = 'Invalid input.';
    }

    errorElement.className = 'error active';
  }
}
