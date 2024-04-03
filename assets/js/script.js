// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
// const openButton = document.querySelector("#formModal");
// const submitButton = document.querySelector(".modal-body");
// const taskTitleInput = document.querySelector("#taskTitle");
// const taskDueDateInput = document.querySelector("#taskDueDate");
// const taskDescriptionInput = document.querySelector("#taskDescription");

// const tasks = {
  //   taskTitle: taskTitleInput.value,
  //   taskDueDate: taskDueDateInput.value,
  //   taskDescription: taskDescriptionInput.value,
  // };
  // console.log(tasks);
// Todo: create a function to generate a unique task id
function generateTaskId() {
  return Date.now();
}

// Todo: create a function to create a task card
function createTaskCard(task) {
  let today = new Date();
  let dueDate = new Date(task.taskDueDate);
  let daysRemaining = Math.floor((dueDate - today) / (1000 * 60 * 60 * 24));
  let colorClass = "";
  if (daysRemaining < 0) {
    colorClass = "bg-danger";
  } else if (daysRemaining < 3) {
    colorClass = "bg-warning";
  };
  let card = `
    <div class ="card mb-3 ${colorClass}" id="${task.id}">
    <div class="card-body">
    <h5 class="card-title">${task.taskTitle}</h5>
    <p class ="card-text"><strong>Due Date:</strong> ${task.taskDueDate}</p>
    <p class="card-text">${task.taskDescription}</p>
    <button class="btn btn-danger btn-sm delete-task" data-task-id=${task.id}">Delete</button>
    </div>
    </div>
    `;
    return card;
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
  $("#todo-cards").empty();
  $("#in-progress-cards").empty();
  $("#done-cards").empty();

  taskList.forEach(task) => {
    let card = createTaskCard(task);

}

// Todo: create a function to handle adding a new task
function handleAddTask(event) {
  
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
  $(submitButton).on("click", handleAddTask);


  $("#taskDueDate").datepicker({
    changeMonth: true,
    changeYear: true,
  });
});
// Take a task and create a card from the task.
