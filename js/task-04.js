const incrementBtnEl = document.querySelector('[data-action="increment"]');
const decrementBtnEl = document.querySelector('[data-action="decrement"]');
let counterValue = 0;


incrementBtnEl.addEventListener("click", function() {
    counterValue += 1;
    console.log(counterValue);
    console.log(incrementBtnEl.dataset.action);
});

decrementBtnEl.addEventListener("click", function() {
    counterValue -= 1;
    console.log(counterValue);
    console.log(decrementBtnEl.dataset.action);
});









