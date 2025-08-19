document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("addTaskBtn").addEventListener("click", addTask);
    loadTasks();
});

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let category = document.getElementById("taskCategory").value;
    let taskText = taskInput.value.trim();

    if (taskText === "") return;

    let taskList = document.getElementById(category).querySelector("ul");

    let li = document.createElement("li");
    li.innerHTML = `<span>${taskText}</span> <button class="delete" onclick="removeTask(this)">✖</button>`;

    taskList.appendChild(li);
    taskInput.value = "";  

    saveTasks();
}

function removeTask(button) {
    button.parentElement.remove();
    saveTasks();
}

function saveTasks() {
    let tasks = {};
    document.querySelectorAll(".quadrant ul").forEach(ul => {
        let id = ul.parentElement.id;
        tasks[id] = Array.from(ul.children).map(li => li.querySelector("span").textContent);
    });

    localStorage.setItem("eisenhowerTasks", JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("eisenhowerTasks")) || {};
    Object.keys(tasks).forEach(category => {
        let taskList = document.getElementById(category).querySelector("ul");
        taskList.innerHTML = "";

        tasks[category].forEach(task => {
            let li = document.createElement("li");
            li.innerHTML = `<span>${task}</span> <button class="delete" onclick="removeTask(this)">✖</button>`;
            taskList.appendChild(li);
        });
    });
}
