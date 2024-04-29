function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskText = taskInput.value.trim();
    
    if (taskText !== '') {
      var li = document.createElement('li');
      li.textContent = taskText;
      
      var deleteButton = document.createElement('button');
      deleteButton.textContent = '❌';
      deleteButton.onclick = function() {
        li.remove();
      };
      
      var completeButton = document.createElement('button');
      completeButton.textContent = '✓';
      completeButton.onclick = function() {
        li.classList.toggle('completed');
        if (li.classList.contains('completed')) {
          document.getElementById('completedTasks').appendChild(li);
          completeButton.textContent = '❌'; // Change complete button to delete button
          completeButton.onclick = function() {
            li.remove();
          };
        } else {
          document.getElementById('pendingTasks').appendChild(li);
          completeButton.textContent = '✓'; // Change delete button to complete button
          completeButton.onclick = function() {
            li.classList.toggle('completed');
            addTaskToCompleted(li); // Move task to completed list
          };
        }
      };
      
      li.appendChild(deleteButton);
      li.appendChild(completeButton);
      
      document.getElementById('pendingTasks').appendChild(li);
      
      taskInput.value = '';
    }
  }
  