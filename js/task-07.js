const inputValue = document.querySelector('#font-size-control');
const spanValue = document.querySelector('#text');

inputValue.addEventListener('input', event => {
  spanValue.style.fontSize = event.currentTarget.value + 'px';
  console.log(spanValue.style);
});
