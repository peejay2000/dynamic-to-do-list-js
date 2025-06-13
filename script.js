// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
  // Select the "Add Task" button, input field, and task list
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a new task to the list
  function addTask() {
    // Get and trim the input value
    const taskText = taskInput.value.trim();

    // Alert user if input is empty
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Create a new <li> element and set its text
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a "Remove" button and style it
    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.className = "remove-btn";

    // When the remove button is clicked, delete the task
    removeButton.onclick = () => {
      taskList.removeChild(li);
    };

    // Append the remove button to the list item
    li.appendChild(removeButton);

    // Add the list item to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
  }

  // When the "Add Task" button is clicked, call addTask
  addButton.addEventListener('click', addTask);

  // Allow users to press Enter to add a task
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // (Optional) Run addTask on page load — currently does nothing unless default content is added
  addTask();
});
