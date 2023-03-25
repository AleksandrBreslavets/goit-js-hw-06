const loginValidation = document.querySelector(".login-form");
loginValidation.addEventListener("submit", onLoginValidation);
function onLoginValidation(evt) {
    evt.preventDefault();
    const email = evt.currentTarget.elements.email.value;
    const password = evt.currentTarget.elements.password.value;
    const userData = { email, password };
    if (!email || !password) {
        alert("Please, fill in all fields");
    }
    else console.log(userData);
    evt.currentTarget.reset();
}
