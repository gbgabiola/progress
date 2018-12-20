var todos = [];
var input = prompt('What would you like to do?');

// It doesn 't display the HTML on the page until after the popup has been closed
// You can avoid this by wrapping your JS code in the following setTimeout function

window.setTimeout(function() {
  while (input !== 'quit') {
    // handle input
    if (input === 'list') {
      printTodos();
    } else if (input === 'new') {
      addTodo();
    } else if (input === 'delete') {
      deleteTodo();
    }
    // ask again for new input
    input = prompt('What would you like to do?');
  }
  console.log('OK, YOU QUIT THE APP');
}, 500);



function printTodos() {
  console.clear(); // clear the console first
  console.log('**********');
  todos.forEach(function (todo, index) {
    console.log(index + ': ' + todo);
  });
  console.log('**********');
}

function addTodo() {
  // ask for new todos
  var newTodo = prompt('Enter new todo');
  // add to todos array
  todos.push(newTodo);
  console.log(newTodo + ' added to list');
}

function deleteTodo() {
  // ask for index of todo to be deleted
  var index = prompt('Enter index of todo to delete');
  // delete that todo
  // splice()
  todos.splice(index, 1);
  console.log('Todo Removed');
}