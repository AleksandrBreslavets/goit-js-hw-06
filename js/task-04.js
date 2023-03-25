const increment = document.querySelector('button[data-action="increment"]');
const decrement = document.querySelector('button[data-action="decrement"]');
const valueOfCounter = document.querySelector("#value");
increment.addEventListener("click", onCounterIncrementClick);
decrement.addEventListener("click", onCounterDecrementClick);
let counter = 0;
function onCounterIncrementClick() {
    counter += 1;
    valueOfCounter.textContent = counter;
}
function onCounterDecrementClick() {
    counter -= 1;
    valueOfCounter.textContent = counter;
}