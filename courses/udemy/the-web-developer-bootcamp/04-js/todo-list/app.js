let input = prompt('What would you like to do?');
const todos = [];
// const todos = ['Wash the car', 'Clean the house'];
while (input !== 'quit' && input !== 'q') {
  if (input === 'list') {
    console.log('**********');
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
    console.log('**********');
  } else if (input === 'new') {
    const newTodo = prompt('Enter new todo:');
    todos.push(newTodo);
    console.log(`${newTodo} added to list.`);
  } else if (input === 'delete') {
    const index = parseInt(prompt('Enter the index of todo to delete:'));
    if (!Number.isNaN(index)) {
      const deleted = todos.splice(index, 1);
      console.log(`${deleted[0]} is deleted.`);
    } else {
      console.log('Invalid index.');
    }
  }
  input = prompt('What would you like to do?');
}
console.log('OK, QUIT THE APP!');
