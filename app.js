// Define UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn  = document.querySelector('.clear-task');
const filter  = document.querySelector('.filter');
const taskInput  = document.querySelector('#task');


// load all event listeners
loadEventListeners();

// load all event listeners
function loadEventListeners(){
    //Add task event
    form.addEventListener('submit', addTask);

}

// Add Task
function addTask(e){
    if(taskInput.value === ''){
        alert('Add a task');
    }
// create li element
const li = document.createElement('li');

//Add class
li.className = 'collection-item';

//create a text node and append to li

li.appendChild(document.createTextNode(taskInput.value));

//create new link

const link = document.createElement('a');

//Add class
link.className = 'delete-item secondary-content';

//Add icon html
link.innerHTML = '<i class ="fa fa-remove"><</i>'

// Append the link to li
li.appendChild(link);

//Append li to ul
taskList.appendChild(li);

e.preventDefault();

//Clear input
taskInput.value = '';

}
