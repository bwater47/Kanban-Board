// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
let nextId = JSON.parse(localStorage.getItem("nextId"));
// const openButton = document.querySelector("#formModal");
const submitButton = document.querySelector("#submitButton");
// const taskTitleInput = document.querySelector("#taskTitle");
// const taskDueDateInput = document.querySelector("#taskDueDate");
// const taskDescriptionInput = document.querySelector("#taskDescription");

// console.log(tasks);
// Todo: create a function to generate a unique task id
function generateTaskId() {
  return Date.now();
}

// Todo: create a function to create a task card
function createTaskCard(task) {
  // Calculate the number of days remaining until the task is due
  let today = new Date();
  let dueDate = new Date(task.taskDueDate);
  let daysRemaining = Math.floor((dueDate - today) / (1000 * 60 * 60 * 24));
  let colorClass = "";
  if (daysRemaining < 0) {
    colorClass = "bg-danger";
  } else if (daysRemaining < 3) {
    colorClass = "bg-warning";
  }
  // Create the card
  let card = `
    <div class ="card draggable mb-3 ${colorClass}" id="${task.id}">
    <div class="card-body">
    <h5 class="card-title">${task.taskTitle}</h5>
    <p class ="card-text"><strong>Due Date:</strong> ${task.taskDueDate}</p>
    <p class="card-text">${task.taskDescription}</p>
    <button class="btn btn-danger btn-sm delete-task" data-task-id="${task.id}">Delete</button>
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

  taskList.forEach((task) => {
    const card = createTaskCard(task);
    $(`#${task.status}-cards`).append(card);
    //  $(`#todo-cards`).append(card);
  });
  // add event listener to delete button
  deleteTaskButton = document.querySelector(".delete-task");
  deleteTaskButton.addEventListener("click", handleDeleteTask);
  // make cards draggable
  $(".draggable").draggable({
    opacity: 0.7,
    zIndex: 100,

    helper: function (e) {
      const original = $(e.target).hasClass("ui-draggable")
        ? $(e.target)
        : $(e.target).closest(".ui-draggable");

      return original.clone().css({
        width: original.outerWidth(),
      });
    },
  });
}

// Todo: create a function to handle adding a new task
function handleAddTask(event) {
  event.preventDefault();
  // Declaring variables to store the values of the input fields
  const taskTitle = $("#taskTitle").val().trim();
  const taskDueDate = $("#taskDueDate").val();
  const taskDescription = $("#taskDescription").val().trim();
  // Creates a new task object
  const tasks = {
    id: generateTaskId(),
    status: "todo",
    taskTitle: taskTitle,
    taskDueDate: taskDueDate,
    taskDescription: taskDescription,
  };
  // Adds the new task object to the taskList array
  taskList.push(tasks);
  // console.log(tasks);
  // save to localStorage

  localStorage.setItem("tasks", JSON.stringify(taskList));
  renderTaskList();
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {
  const taskId = $(this).attr("data-task-id");
  taskList = taskList.filter((task) => task.id !== parseInt(taskId));
  localStorage.setItem("tasks", JSON.stringify(taskList));
  renderTaskList();
}

// const taskId = $(this).attr('data-task-id');
// const projects = readProjectsFromStorage();

// projects.forEach((project) => {
//   if (project.id === projectId) {
//     projects.splice(projects.indexOf(project), 1);
//   }
// });
// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
  const taskId = ui.helper.attr("id");
  const newStatus = $(this).attr("id");
  taskList = taskList.map((task) => {
    if (task.id === parseInt(taskId)) {
      task.status = newStatus;
    }
    return task;
  });
  localStorage.setItem("tasks", JSON.stringify(taskList));
  renderTaskList();
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
  $(submitButton).on("click", handleAddTask);

  $('.lane').droppable({
    accept: '.draggable',
    drop: handleDrop,
  });

  $("#taskDueDate").datepicker({
    changeMonth: true,
    changeYear: true,
  });
});
// Take a task and create a card from the task.
