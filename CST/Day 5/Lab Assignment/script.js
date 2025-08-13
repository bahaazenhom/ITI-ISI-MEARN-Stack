// Ex1: -------------------------------------------------------------------------------
function login(){
    console.log("Login function called");

    var login = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    }
    
    const message = document.getElementById("message");
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
    });

    if(login.username === "admin" && login.password === "123") {
        message.textContent = "Welcome";
        console.log("Login successful");
    }
    else {
        message.textContent = "You are not registered";
        console.log("Login failed");
    }
}

// Ex2: -------------------------------------------------------------------------------
var tasks = [];
function addTask(){
    var task = {
        name: document.getElementById("taskinput").value.trim(),
        status: "pending"
    };
    tasks.push(task);

    const todoList = document.getElementById("todoList");

    const item = document.createElement("div");
    item.className = "todo-item";

    const taskText = document.createElement("span");
    taskText.textContent = task.name;
    taskText.className = "task-text";

    const checkButton = document.createElement("button");
    checkButton.textContent = "✔️";
    checkButton.className = "check-button";
    checkButton.addEventListener("click", function() {
        item.classList.toggle("completed");
        task.status = item.classList.contains("completed") ? "completed" : "pending";
        console.log("Updated tasks: ", tasks);
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.className = "delete-button";
    deleteButton.addEventListener("click", function() {
        todoList.removeChild(item);
        tasks.splice(tasks.indexOf(task), 1);
        console.log("Updated tasks: ", tasks);
    });

    item.appendChild(taskText);
    item.appendChild(checkButton);
    item.appendChild(deleteButton);
    todoList.appendChild(item);

    console.log("Tasks: ", tasks);
    document.getElementById("taskinput").value = "";

    
}

