// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
const submitButton = document.querySelector('#submitButton');




// Todo: create a function to generate a unique task id
function generateTaskId() {
  // Generate a unique task ID using timestamp and random number
//   const date = "2024-04-01";
//   const unixTimestamp = dayjs(date).unix();
  //   const timestamp = new Date().getTime(); // Current timestamp
  if (!nextId) {
    nextId = [];
  }
  const randomNumber = Math.floor(Math.random() * 9002); // Random number between 0 and 9001
  const uniqueId = unixTimestamp + "-" + randomNumber; // Combine timestamp and random number
  return uniqueId;
  localStorage.setItem('uniqueId')
  //   console.log(uniqueId);
}

// Todo: create a function to create a task card
function createTaskCard(task) {
  // Create a task card using an event listener on add task, a form to populate with Task Title, Task Due Date, Task Description.
  task.addEventListener("#formModal", {modal});
//   const myModalEl = document.getElementById('#formModal')
// myModalEl.addEventListener('show.bs.modal', function (task) {
  // #formModal for datepicker
  // Capture variables to use in the script from form, and render it to the screen in the #to-do.
  // modal html line 25 for title, and description.
  // Use day.js here to locally store the unix date.
  $(function () {
    $("#formModal").datepicker({
      changeMonth: true,
      changeYear: true,
    });
  });
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}
// Render three columns into the dom, iterate over taskList to place the tasks created in the correct columns.

// Todo: create a function to handle adding a new task
function handleAddTask(event) {

    const tasks = {
        taskTitle: taskTitleInput.value
    }
}
// Add function to add taskCard when we click submit. Push to an array so it persists.

// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {
    
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
$(submitButton).on('click', handleAddTask)
});

// Take a task and create a card from the task.