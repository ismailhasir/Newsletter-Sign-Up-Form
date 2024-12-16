const buttonSubscribe = document.querySelector(".button-subscribe");
const buttonDismiss = document.querySelector(".button-dismiss");

const mainContainer = document.querySelector(".main-container");
const successContainer = document.querySelector(".success-container");

const form = document.getElementById("emailForm");
const emailInput = document.getElementById("email");
const errorLabel = document.querySelector(".error-label");

buttonDismiss.addEventListener("click", () => {
  mainContainer.classList.remove("hidden");
  successContainer.classList.add("hidden");
});

// Function to check email validity
function isValidEmail(email) {
  // Basic regex for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = emailInput.value;

  // Validate email
  if (!isValidEmail(email)) {
    errorLabel.classList.remove("hidden");
    emailInput.classList.add("input-invalid");
  } else {
    errorLabel.classList.add("hidden");
    mainContainer.classList.add("hidden");
    successContainer.classList.remove("hidden");
    emailInput.classList.remove("input-invalid");
  }
});
