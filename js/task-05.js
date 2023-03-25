const input = document.querySelector("#name-input");
const nameOfUser = document.querySelector("#name-output");
input.addEventListener("change", onInputChange);
function onInputChange(evt) {
    const defaultUserName = input.textContent;
    nameOfUser.textContent = evt.currentTarget.value || defaultUserName;
};