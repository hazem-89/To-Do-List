
//selectors
const todoButton = document.querySelector('.todo-button');
const todoInput = document.querySelector('.todo-input');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo')

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);
//Functions 
function addTodo(event) { 
//prevent form from submitting
event.preventDefault();

// to do Div
const todoDiv = document.createElement('div');
todoDiv.classList.add("todo");
const newTodo = document.createElement('li');
newTodo.innerHTML = todoInput.value;
newTodo.classList.add("todo-item");
todoDiv.appendChild(newTodo);
//check if todo
const completedButton = document.createElement('button');
completedButton.innerHTML = '<i class="far fa-check"></i>';
completedButton.classList.add('complete-btn');
todoDiv.appendChild(completedButton);
// check trash button
const trashButton = document.createElement('button');
trashButton.innerHTML = '<i class="far fa-trash"></i>';
trashButton.classList.add('trash-btn');
todoDiv.appendChild(trashButton);
//Append to list
todoList.appendChild(todoDiv);
// Clear input value
todoInput.value = '';
}

function deleteCheck(e) {
const item = e.target;
// Delete from list
if (item.classList[0] === 'trash-btn') {
	const todo = item.parentElement;
	todo.classList.add('fall')
	todo.addEventListener('transitionend', function () {
		todo.remove();
	})
}
// check mark
if (item.classList[0] === 'complete-btn') {
	const todo = item.parentElement;
	todo.classList.toggle('completed')
}
}

function filterTodo(e) {
	const todos = todoList.childNodes;
	console.log(todos);

}