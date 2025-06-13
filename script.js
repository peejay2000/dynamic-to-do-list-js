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
});
