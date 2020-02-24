let todoForm = document.getElementById('todoForm');
let todoField = document.getElementById('todoField');
let todoList = document.getElementById('todoList');

todoForm.addEventListener('submit', e => {
  e.preventDefault();
  createItem(todoField.value);
});

function createItem(item) {
  let todoHTML = `<li>${item} <button onclick="deleteItem(this)">Delete</button></li>`;
  todoList.insertAdjacentHTML('beforeend', todoHTML);
  todoField.value = '';
  todoField.focus();
}

function deleteItem(item) {
  item.parentElement.remove();
}
