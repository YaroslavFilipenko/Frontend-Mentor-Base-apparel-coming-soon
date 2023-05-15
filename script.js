const form = document.getElementById('form');
const emailInput = document.getElementById('email-input');
const emailSend = document.getElementById('email-send');
const errorImage = document.getElementById('error-image');
const errorLabel = document.getElementById('error-label');

emailSend.addEventListener('click', (e) => {
  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
  if (!emailInput.value.match(validRegex)) {
    errorImage.style.display = "block";
    errorLabel.style.display = "block";
  } else {
    form.reset(); //clear form after click on the send button
  }
  e.preventDefault();
});

emailInput.addEventListener('focus', () => {
    errorImage.style.display = "none";
    errorLabel.style.display = "none";
});  