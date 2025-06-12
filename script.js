document.addEventListener('DOMContentLoaded', function () {
    // Get references to DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to create and add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            // Create new <li> element
            const li = document.createElement('li');
            li.textContent = taskText;

            // Create remove button
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className = 'remove-btn';

            // Attach click event to remove the task
            removeButton.onclick = function () {
                taskList.removeChild(li);
            };

            // Append remove button to the <li>, then append <li> to task list
            li.appendChild(removeButton);
            taskList.appendChild(li);

            // Clear input field
            taskInput.value = '';
        }
    }

    // Add task on button click
    addButton.addEventListener('click', addTask);

    // Add task when Enter is pressed in input
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
