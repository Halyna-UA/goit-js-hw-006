const textInput = document.querySelector('#validation-input');
textInput.addEventListener('blur', () => {
  if (Number(textInput.dataset.length) === textInput.value.length) {
    toggleClass('valid', 'invalid');
  } else {
    toggleClass('invalid', 'valid');
  }
});

function toggleClass(add, remove) {
  textInput.classList.add(add);
  textInput.classList.remove(remove);
}
