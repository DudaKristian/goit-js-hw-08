import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector("input[name = 'email']");
const texareaEl = document.querySelector("textarea[name = 'message']");
const btnEl = document.querySelector('button[type = "submit"]');

formEl.addEventListener('input', throttle(onTyping, 500));
formEl.addEventListener('submit', onSubmit);
dataRecovery();

function onTyping() {
  const data = { email: inputEl.value, message: texareaEl.value };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function dataRecovery() {
  const data = localStorage.getItem(STORAGE_KEY);
  const parsedData = JSON.parse(data);
  if (data) {
    inputEl.value = parsedData.email;
    texareaEl.value = parsedData.message;
  }
}

function onSubmit(e) {
  e.preventDefault();
  console.log({ email: inputEl.value, message: texareaEl.value });
  e.currentTarget.reset();

  localStorage.removeItem(STORAGE_KEY);
}
