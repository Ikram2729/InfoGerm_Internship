document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");

    // Add new task
    function addTask() {
        const taskName = taskInput.value.trim();
        if (taskName === "") {
            alert("Please enter a task!");
            return;
        }

        const taskItem = document.createElement("li");
        taskItem.className = "task-item";

        const taskCheckbox = document.createElement("input");
        taskCheckbox.type = "checkbox";
        taskCheckbox.addEventListener("change", () => {
            taskItem.classList.toggle("completed");
        });

        const taskNameElem = document.createElement("span");
        taskNameElem.className = "task-name";
        taskNameElem.textContent = taskName;

        const editBtn = document.createElement("button");
        editBtn.className = "edit-btn";
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", () => {
            const newTaskName = prompt("Edit your task:", taskNameElem.textContent);
            if (newTaskName !== null && newTaskName.trim() !== "") {
                taskNameElem.textContent = newTaskName.trim();
            }
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
            taskList.removeChild(taskItem);
        });

        taskItem.appendChild(taskCheckbox);
        taskItem.appendChild(taskNameElem);
        taskItem.appendChild(editBtn);
        taskItem.appendChild(deleteBtn);

        taskList.appendChild(taskItem);
        taskInput.value = "";
    }

    // Add task button click
    addTaskBtn.addEventListener("click", addTask);

    // Enter key for adding tasks
    taskInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            addTask();
        }
    });
});
