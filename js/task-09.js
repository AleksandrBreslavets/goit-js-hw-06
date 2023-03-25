function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyElement = document.querySelector("body");
const colorValue = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color");
btnChangeColor.addEventListener("click", onBodyElementChangeColor);
function onBodyElementChangeColor(evt) {
  const color = getRandomHexColor();
  bodyElement.style.backgroundColor = `${color}`;
  colorValue.textContent = color;
}