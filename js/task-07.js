const inputRange = document.querySelector("#font-size-control");
const text=document.querySelector("#text")
inputRange.addEventListener("input", ontextFontSizeChange);
function ontextFontSizeChange(evt) {
    text.style.fontSize = `${evt.currentTarget.value}px`;
};