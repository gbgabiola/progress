// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const groceries = document.querySelector('#list');

form.addEventListener('submit', e => {
  e.preventDefault();
  const productInput = form.elements.product;
  const quantityInput = form.elements.qty;
  addProduct(productInput, quantityInput);
  productInput.value = '';
  quantityInput.value = '';
  productInput.focus();
});

const addProduct = (product, qty) => {
  const newLi = document.createElement('li');
  newLi.innerText = `${qty.value} ${product.value}`;
  groceries.appendChild(newLi);
};
