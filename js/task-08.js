const loginValidation = document.querySelector(".login-form");
loginValidation.addEventListener("submit", onLoginValidation);
function onLoginValidation(evt) {
    evt.preventDefault();
    const email = evt.currentTarget.elements.email.value.trim();
    const password = evt.currentTarget.elements.password.value.trim();
    const userData = { email, password };
    if (!email || !password) {
        return alert("Please, fill in all fields");
    }
    else console.log(userData);
    evt.currentTarget.reset();
}
