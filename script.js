document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn')
    const taskInput = document.getElementById('task-input')
    const taskList = document.getElementById('task-list')

    let tasks = []
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }
    function addTask(taskText="", save=true) {
        if (!taskText) {
            taskText = taskInput.value.trim();
        }
        if (taskText == "") {
            alert("Input can't be empty")
            return;
        }
        const listItem = document.createElement("li")
        const taskTextSpan = document.createElement("span");

        taskTextSpan.textContent = taskText
        const removeButton = document.createElement('button')
        removeButton.textContent = "Remove"
        removeButton.classList.add('remove-btn')
        removeButton.addEventListener('click', () => {
            listItem.remove()
            tasks = tasks.filter(t => t !== taskText)
            saveTasks()
        })
        listItem.appendChild(taskTextSpan);
        listItem.appendChild(removeButton)
        taskList.appendChild(listItem)

        if (save) {
            tasks.push(taskText)
            saveTasks()
        }
        taskInput.value = '';
        taskInput.focus();
    }
    function loadTasks() {
        storedTasks = JSON.parse(localStorage.getItem('tasks'))
        storedTasks.forEach(taskText => addTask(taskText, save=false));
    }
    addButton.addEventListener('click', () => addTask())
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === "Enter") {
            addTask()
        }
    })
    loadTasks()
})