let taskList = [];
            function add() {
                let task = document.getElementById('taskInput').value;
                taskList.push(task);
                document.getElementById('taskInput').value = '';
                displayTasks();
            }
            function displayTasks() {
                let taskListDiv = document.querySelector('.tasklist');
                taskListDiv.innerHTML = '';
                for (let i = 0; i < taskList.length; i++) {
                    let taskDiv = document.createElement('div');
                    taskDiv.textContent = taskList[i];
                    taskListDiv.appendChild(taskDiv);
            }
            }
