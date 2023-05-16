const form = document.getElementById('form');
const emailInput = document.getElementById('email-input');
const emailSend = document.getElementById('email-send');
const errorLabel = document.getElementById('error-label');

emailSend.addEventListener('click', (e) => {
  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
  if (!emailInput.value.match(validRegex)) {
    errorLabel.style.display = "block";
    emailInput.classList.add("email-input-error");
  } else {
    form.reset(); //clear form after click on the send button
  }
  e.preventDefault();
});

emailInput.addEventListener('focus', () => {
  emailInput.classList.remove("email-input-error");
  errorLabel.style.display = "none";
});  