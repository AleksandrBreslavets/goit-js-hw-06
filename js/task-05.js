const input = document.querySelector("#name-input");
const nameOfUser = document.querySelector("#name-output");
input.addEventListener("input", onInputChange);
const defaultUserName = nameOfUser.textContent;
function onInputChange(evt) {
    nameOfUser.textContent = evt.currentTarget.value.trim() || defaultUserName;
};