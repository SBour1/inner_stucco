const form = document.querySelector('form');
const inputFields = document.querySelectorAll('input');
// eslint-disable-next-line no-unused-vars
const textAreas = document.querySelectorAll('textarea');
const submitButton = document.querySelector('.submit-button');

const validate = () => {
  let inputArray = [];

  inputArray = [...inputFields];

  // Filter out inputs/textareas that have content
  const filteredArray = inputArray.filter(field => field.value.trim().length > 0);

  // If the number of fields with content in the filtered array matches the total number of fields, enable the submit button
  filteredArray.length === inputArray.length ?
    submitButton.removeAttribute('disabled') :

    submitButton.setAttribute('disabled', '');
};

form.addEventListener('input', validate);