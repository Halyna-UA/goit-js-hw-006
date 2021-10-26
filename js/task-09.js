const button = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');
const body = document.querySelector('body');

button.addEventListener('click', changeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function changeColor() {
  body.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = getRandomHexColor();
}
