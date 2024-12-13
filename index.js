const buttonSubscribe = document.querySelector(".button-subscribe");
const buttonDismiss = document.querySelector(".button-dismiss");

const mainContainer = document.querySelector(".main-container");
const successContainer = document.querySelector(".success-container");

buttonSubscribe.addEventListener("click", () => {
  mainContainer.classList.add("hidden");
  successContainer.classList.remove("hidden");
});

buttonDismiss.addEventListener("click", () => {
  mainContainer.classList.remove("hidden");
  successContainer.classList.add("hidden");
});
