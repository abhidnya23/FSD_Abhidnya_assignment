function addTask() {

    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    // Check if input is empty
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

    // Create Done button
    let doneButton = document.createElement("button");

    doneButton.innerText = "Done";
    doneButton.className = "done-button";

    // Mark task as completed
    doneButton.onclick = function () {

        span.classList.toggle("completed");

        if (span.classList.contains("completed")) {
            doneButton.innerText = "Undo";
        } else {
            doneButton.innerText = "Done";
        }

    };

    // Also allow clicking the task text
    span.onclick = function () {

        span.classList.toggle("completed");

        if (span.classList.contains("completed")) {
            doneButton.innerText = "Undo";
        } else {
            doneButton.innerText = "Done";
        }

    };

    // Create Delete button
    let deleteButton = document.createElement("button");

    deleteButton.innerText = "Delete";
    deleteButton.className = "delete-button";

    // Delete task
    deleteButton.onclick = function () {

        li.remove();

    };

    // Add elements to list item
    li.appendChild(span);
    li.appendChild(doneButton);
    li.appendChild(deleteButton);

    // Add list item to task list
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";

    // Focus on input
    taskInput.focus();
}