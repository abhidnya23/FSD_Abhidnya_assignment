function addTask() {

    let taskInput = document.getElementById("taskInput");

    let taskText = taskInput.value.trim();

    if (taskText === "") {

        alert("Please enter a task.");

        return;
    }

    let taskList = document.getElementById("taskList");

    // Create a new list item
    let li = document.createElement("li");

    // Create task text
    let span = document.createElement("span");

    span.innerText = taskText;

    span.className = "task-text";

    // Mark task as completed
    span.onclick = function () {

        span.classList.toggle("completed");

    };

    // Create delete button
    let deleteButton = document.createElement("button");

    deleteButton.innerText = "Delete";

    deleteButton.className = "delete-button";

    // Delete task
    deleteButton.onclick = function () {

        li.remove();

    };

    // Add elements to list item
    li.appendChild(span);

    li.appendChild(deleteButton);

    // Add list item to task list
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";

    taskInput.focus();
}