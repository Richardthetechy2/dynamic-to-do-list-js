document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn')
    const taskInput = document.getElementById('task-input')
    const taskList = document.getElementById('task-list')

    function addTask() {
        let taskText = taskInput.value.trim()
        if (taskText === "") {
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
        })
        listItem.appendChild(taskTextSpan);
        listItem.appendChild(removeButton)
        taskList.appendChild(listItem)

        taskInput.value = '';
        taskInput.focus();
    }
    addButton.addEventListener('click', addTask)
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === "Enter") {
            addTask()
        }
    })
})