const listEl = document.querySelectorAll(`.item`);
console.log(listEl.length);

listEl.forEach(item => {
  const title = item.querySelector('h2');
  console.log(title);
  console.log(title.textContent);
  const itemList = item.querySelectorAll('ul li');
  console.log(itemList);
  console.log(itemList.length);
});
