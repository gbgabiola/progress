const form = document.querySelector('#shelterForm');
const input = document.querySelector('#catName');
const cats = document.querySelector('#cats');

form.addEventListener('submit', e => {
  e.preventDefault();
  const newLi = document.createElement('li');
  newLi.innerText = input.value;
  cats.append(newLi);
  input.value = '';
});
