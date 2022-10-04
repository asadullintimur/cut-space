const emailLabel = document.querySelector("#emailLabel");
const emailInput = document.querySelector("#emailInput");

emailInput.addEventListener("focus", () => {
    emailLabel.classList.add("active");
})

emailInput.addEventListener("blur", () => {
    emailLabel.classList.remove("active");
})
