const validationInput = document.querySelector("#validation-input");
validationInput.addEventListener("blur", oninputValidation)
function oninputValidation(evt) {
    if (evt.currentTarget.value.length < Number(validationInput.dataset.length)){
        validationInput.classList.add("invalid");
    }
    else validationInput.classList.contains("invalid") ? validationInput.classList.replace("invalid", "valid") : validationInput.classList.add("invalid");
}