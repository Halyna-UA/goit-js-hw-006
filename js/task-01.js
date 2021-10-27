const listEl = document.querySelectorAll(`.item`);
console.log('Number of categories:', listEl.length);

listEl.forEach(item => {
  const title = item.firstElementChild.textContent;
  console.log('Category:', title);
  const itemList = item.firstElementChild.nextElementSibling.children;
  console.log('Elements:', itemList.length);
});
