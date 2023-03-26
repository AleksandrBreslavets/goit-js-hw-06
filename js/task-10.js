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
  const boxes = [];
  for (let i =0; i < amount; i++){
    const createdDiv = document.createElement("div");
    createdDiv.style.width = `${sizeOfDiv}px`;
    createdDiv.style.height = `${sizeOfDiv}px`;
    createdDiv.style.backgroundColor = getRandomHexColor();
    boxes.push(createdDiv);
    sizeOfDiv += 10;
  }
  divBox.append(...boxes);
}
function destroyBoxes() {
  divBox.innerHTML = "";
  sizeOfDiv = 30;
}
