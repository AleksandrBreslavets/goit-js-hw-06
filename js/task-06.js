const validationInput = document.querySelector("#validation-input");
validationInput.addEventListener("blur", oninputValidation)
function oninputValidation(evt) {
    if (evt.currentTarget.value.trim().length === Number(validationInput.dataset.length)) {
        validationInput.classList.remove("invalid");
        validationInput.classList.add("valid");
    }
    else {
        validationInput.classList.add("invalid");
        validationInput.classList.remove("valid");
    }
}