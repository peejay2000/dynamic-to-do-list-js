// Ensure the script runs only after the HTML document is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // ========================
  // Select DOM Elements
  // ========================
  const addButton = document.getElementById('add-task-btn');     // Button to add a task
  const taskInput = document.getElementById('task-input');       // Input field for new task
  const taskList = document.getElementById('task-list');         // Unordered list to display tasks

  // ========================
  // Function to Add a Task
  // ========================
  function addTask() {
    // Retrieve and trim the input value
    const taskText = taskInput.value.trim();

    // Check if input is empty; if so, alert user
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Create a new list item element and set its text content
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a new remove button for the task
    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.className = "remove-btn";

    // When the remove button is clicked, remove the list item
    removeButton.onclick = () => {
      taskList.removeChild(li);
    };

    // Append the remove button to the list item
    li.appendChild(removeButton);

    // Append the list item to the task list
    taskList.appendChild(li);

    // Clear the input field after adding the task
    taskInput.value = "";
  }

  // ========================
  // Attach Event Listeners
  // ========================

  // Add a task when the button is clicked
  addButton.addEventListener('click', addTask);

  // Add a task when the "Enter" key is pressed in the input field
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // ========================
  // Optional: Run addTask once on page load
  // ========================
  // Uncomment below line only if you want to add a default task on page load
  // addTask();
  function addTask() {
  // Get and trim the input value
  const taskText = taskInput.value.trim();

  // Alert if the input is empty
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  // Create a new <li> element and set its textContent to taskText
  const li = document.createElement('li');
  li.textContent = taskText;

  // Create a new <button> element for removing the task
  const removeButton = document.createElement('button');
  removeButton.textContent = "Remove";
  removeButton.className = "remove-btn"; // Set class without using classList.add

  // When remove button is clicked, remove the <li> from the task list
  removeButton.onclick = function () {
    taskList.removeChild(li);
  };

  // Append the remove button to the list item
  li.appendChild(removeButton);

  // Append the list item to the task list
  taskList.appendChild(li);

  // Clear the input field
  taskInput.value = "";
}
document.addEventListener('DOMContentLoaded', () => {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // ========================
  // Load tasks from Local Storage
  // ========================
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // false = don't save again
  }

  // ========================
  // Save tasks to Local Storage
  // ========================
  function saveTasks() {
    const tasks = [];
    const items = taskList.querySelectorAll('li');
    items.forEach(li => {
      // Remove the remove button's text from the li's textContent
      const taskOnly = li.firstChild.textContent.trim();
      tasks.push(taskOnly);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // ========================
  // Function to add a task
  // ========================
  function addTask(taskText = null, save = true) {
    // If no taskText is passed (manual input), get from input field
    if (taskText === null) {
      taskText = taskInput.value.trim();
    }

    // Alert and return if input is empty
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Create a new li element
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.className = "remove-btn";

    // Attach remove functionality
    removeButton.onclick = () => {
      taskList.removeChild(li);
      saveTasks(); // Update Local Storage after removal
    };

    // Append the button and task
    li.appendChild(removeButton);
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";

    // Save to Local Storage if save flag is true
    if (save) {
      saveTasks();
    }
  }

  // ========================
  // Event Listeners
  // ========================
  addButton.addEventListener('click', () => addTask());

  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // Load stored tasks on startup
  loadTasks();
});


});
