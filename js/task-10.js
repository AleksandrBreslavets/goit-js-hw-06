function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const divBox = document.querySelector("#boxes");
const input = document.querySelector('input[type="number"]');
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");

input.addEventListener("input", onGetInputValue);
createBtn.addEventListener("click", ()=>createBoxes(onGetInputValue()));
destroyBtn.addEventListener("click", destroyBoxes);

let sizeOfDiv = 30;

function onGetInputValue() {
	return Number(input.value);
}
function createBoxes(amount) {
  for (let i =0; i < amount; i++){
    const createdDiv = document.createElement("div");
    createdDiv.style.width = `${sizeOfDiv + i * 10}px`;
    createdDiv.style.height = `${sizeOfDiv + i * 10}px`;
    createdDiv.style.backgroundColor = getRandomHexColor();
    divBox.append(createdDiv);
  }
}
function destroyBoxes() {
  divBox.innerHTML = "";
}
