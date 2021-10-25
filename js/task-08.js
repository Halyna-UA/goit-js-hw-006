const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const formEmail = form.elements.email.value;
  const formPass = form.elements.password.value;
  console.log({ formEmail, formPass });
  form.reset();
}
