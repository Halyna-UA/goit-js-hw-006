const incrementBtnEl = document.querySelector('[data-action="increment"]');
const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const spanWithId = document.querySelector('#value');
let counterValue = 0;

incrementBtnEl.addEventListener('click', function () {
  counterValue += 1;
  console.log(counterValue);
  console.log(incrementBtnEl.dataset.action);
  spanWithId.textContent = counterValue;
});

decrementBtnEl.addEventListener('click', function () {
  counterValue -= 1;
  console.log(counterValue);
  console.log(decrementBtnEl.dataset.action);
  spanWithId.textContent = counterValue;
});
