
        // Setup Event Listener for Page Load:
        // This ensures your JavaScript code runs after the HTML document has fully loaded.
        document.addEventListener('DOMContentLoaded', () => {

            // Select DOM Elements:
            // Use document.getElementById to select the "Add Task" button, input field, and task list.
            const addButton = document.getElementById('add-task-btn');
            const taskInput = document.getElementById('task-input');
            const taskList = document.getElementById('task-list');

            /**
             * Create the addTask Function:
             * This function is responsible for adding new tasks to the list.
             * @param {string} taskText - The text content of the task to be added.
             */
            function addTask(taskText) {
                // Retrieve and trim the value from the task input field.
                taskText = taskText.trim();

                // Check if taskText is not empty.
                if (taskText === "") {
                    // Provide user feedback for empty input.
                    // Note: Using alert() is generally discouraged in production for better UX.
                    // A visual cue like border change or a message box is preferred.
                    taskInput.placeholder = "Task cannot be empty!";
                    taskInput.style.border = '1px solid red'; // Apply inline style for error
                    setTimeout(() => {
                        taskInput.placeholder = "Enter a new task";
                        taskInput.style.border = '1px solid #ccc'; // Revert inline style
                    }, 1500);
                    return;
                }

                // Task Creation and Removal:
                // If taskText is not empty:
                // 1. Create a new li element.
                const listItem = document.createElement('li');
                // The styling for 'li' elements is handled by the embedded CSS.

                // 2. Set its textContent to taskText.
                const taskSpan = document.createElement('span');
                taskSpan.textContent = taskText;
                taskSpan.setAttribute('aria-label', `Task: ${taskText}`); // Accessibility attribute

                // 3. Create a new button element for removing the task.
                const removeButton = document.createElement('button');
                removeButton.textContent = 'Remove';
                // 4. Give it a class name of 'remove-btn' (from your CSS).
                removeButton.classList.add('remove-btn');
                removeButton.setAttribute('aria-label', `Remove task: ${taskText}`); // Accessibility attribute

                // 5. Assign an onclick event to the remove button that, when triggered,
                //    removes the li element from taskList.
                removeButton.addEventListener('click', () => {
                    taskList.removeChild(listItem);
                    console.log(`Task removed: "${taskText}"`);
                });

                // 6. Append the remove button to the li element.
                listItem.appendChild(taskSpan);
                listItem.appendChild(removeButton);

                // 7. Then append the li to taskList.
                taskList.appendChild(listItem);

                // 8. Clear the task input field.
                taskInput.value = '';
                // Reset placeholder if it was changed
                taskInput.placeholder = "Enter a new task";
                taskInput.style.border = '1px solid #ccc'; // Ensure border is reset
                console.log(`Task added: "${taskText}"`);

                // Optionally, focus the input field again for quick adding.
                taskInput.focus();
            }

            // Attach Event Listeners:
            // Add an event listener to addButton that calls addTask when the button is clicked.
            addButton.addEventListener('click', () => {
                addTask(taskInput.value);
            });

            // Add an event listener to taskInput for the 'keypress' event
            // to allow tasks to be added by pressing the "Enter" key.
            taskInput.addEventListener('keypress', (event) => {
                // Check if event.key is equal to 'Enter' before calling addTask.
                if (event.key === 'Enter') {
                    event.preventDefault(); // Prevent default form submission behavior
                    addTask(taskInput.value);
                }
            });

            // Invoke the addTask function on DOMContentLoaded for initial tasks.
            // This ensures your data fetching logic runs once the HTML document has fully loaded.
            addTask("Learn advanced DOM manipulation");
            addTask("Organize project files");
            addTask("Review daily tasks");
        });
