// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
const openButton = document.querySelector("#formModal");
const submitButton = document.querySelector(".modal-body");
const taskTitleInput = document.querySelector("#taskTitle");
const taskDueDateInput = document.querySelector("#taskDueDate");
const taskDescriptionInput = document.querySelector("#taskDescription");

// Todo: create a function to generate a unique task id
function generateTaskId() {
  return Date.now();
}

// Todo: create a function to create a task card
function createTaskCard(task) {
  $(function () {
    $("#taskDueDate").datepicker({
      changeMonth: true,
      changeYear: true,
    });
  });
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
  const tasks = {
    taskTitle: taskTitleInput.value,
    taskDueDate: taskDueDateInput.value,
    taskDescription: taskDescriptionInput.value,
  };
  console.log(tasks);
}

// Todo: create a function to handle adding a new task
function handleAddTask(event) {}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
  $(submitButton).on("click", handleAddTask);
});

// Take a task and create a card from the task.
