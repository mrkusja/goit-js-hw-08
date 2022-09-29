import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const inputEmail = document.querySelector('input');
const inputMessage = document.querySelector('textarea');

form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(event) {
  const dataForm = {
    email: inputEmail.value,
    message: inputMessage.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(dataForm));
}

textForm();
function textForm() {
  const savedStoreData = localStorage.getItem('feedback-form-state');
  if (savedStoreData) {
    const parceSavedStoreData = JSON.parse(
      localStorage.getItem('feedback-form-state')
    );
    // console.log(parceSavedStoreData)
    inputEmail.value = parceSavedStoreData.email;
    inputMessage.value = parceSavedStoreData.message;
  }
}

form.addEventListener('submit', submitHandler);

function submitHandler(event) {
  event.preventDefault();
  const resultObject = JSON.parse(localStorage.getItem('feedback-form-state'));
  console.log(resultObject);
  event.target.reset();
  localStorage.removeItem('feedback-form-state');
}
