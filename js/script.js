const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');
const successMessage = document.getElementById('success-message');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = loginForm['email'].value;

  if (!validateEmail(email)) {
    errorMessage.style.display = 'block';
    successMessage.style.display = 'none';
  } else {
    errorMessage.style.display = 'none';
    successMessage.style.display = 'block';
  }
});

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}