document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task-btn');
    const taskList = document.getElementById('tasks');

    addTaskButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.innerHTML = `
                ${taskText}
                <button class="delete-btn">Delete</button> `;
            taskList.appendChild(taskItem);
            taskInput.value = '';

       
            const deleteButton = taskItem.querySelector('.delete-btn');
            deleteButton.addEventListener('click', function() {
                taskItem.remove();
            });
        }
    });
});

