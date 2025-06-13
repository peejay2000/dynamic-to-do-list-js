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
