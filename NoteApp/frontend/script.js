const API_URL = "http://localhost:5000/tasks";


// =========================
// LOAD TASKS
// =========================

window.onload = function () {
    loadTasks();
};


async function loadTasks() {

    try {

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Failed to fetch tasks");
        }

        const tasks = await response.json();

        displayTasks(tasks);

    } catch (error) {

        console.error("Error loading tasks:", error);

    }
}


// =========================
// DISPLAY TASKS
// =========================

function displayTasks(tasks) {

    const list = document.getElementById("list");

    list.innerHTML = "";


    tasks.forEach(function (item) {

        const taskDiv = document.createElement("div");

        taskDiv.className = "task";


        const span = document.createElement("span");

        span.textContent = item.task;


        const buttons = document.createElement("div");

        buttons.className = "buttons";


        // Update button

        const updateButton = document.createElement("button");

        updateButton.textContent = "Update";

        updateButton.onclick = function () {
            updateTask(item.id, item.task);
        };


        // Delete button

        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";

        deleteButton.onclick = function () {
            deleteTask(item.id);
        };


        buttons.appendChild(updateButton);

        buttons.appendChild(deleteButton);


        taskDiv.appendChild(span);

        taskDiv.appendChild(buttons);


        list.appendChild(taskDiv);

    });
}


// =========================
// ADD TASK
// =========================

async function addTask() {

    const input = document.getElementById("task");

    const task = input.value.trim();


    if (task === "") {

        alert("Please enter a task");

        return;
    }


    try {

        const response = await fetch(API_URL, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                task: task
            })

        });


        if (!response.ok) {

            throw new Error("Failed to add task");

        }


        // Clear input

        input.value = "";


        // Load updated tasks

        loadTasks();


    } catch (error) {

        console.error("Error adding task:", error);

        alert("Unable to add task");

    }
}


// =========================
// UPDATE TASK
// =========================

async function updateTask(id, oldTask) {

    const newTask = prompt(
        "Enter updated task:",
        oldTask
    );


    if (newTask === null) {
        return;
    }


    if (newTask.trim() === "") {

        alert("Task cannot be empty");

        return;
    }


    try {

        const response = await fetch(
            `${API_URL}/${id}`,
            {
                method: "PUT",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    task: newTask.trim()
                })
            }
        );


        if (!response.ok) {

            throw new Error("Failed to update task");

        }


        loadTasks();


    } catch (error) {

        console.error(
            "Error updating task:",
            error
        );

        alert("Unable to update task");

    }
}


// =========================
// DELETE TASK
// =========================

async function deleteTask(id) {

    const confirmDelete = confirm(
        "Are you sure you want to delete this task?"
    );


    if (!confirmDelete) {
        return;
    }


    try {

        const response = await fetch(
            `${API_URL}/${id}`,
            {
                method: "DELETE"
            }
        );


        if (!response.ok) {

            throw new Error("Failed to delete task");

        }


        loadTasks();


    } catch (error) {

        console.error(
            "Error deleting task:",
            error
        );

        alert("Unable to delete task");

    }
}