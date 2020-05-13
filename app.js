// book constructor
function Task(note, date, time) {
  this.note = note;
  this.date = date;
  this.time = time;
}

// ui constructor
function UI() {}

// add task to list
UI.prototype.addTaskToList = function (task) {
  const list = document.getElementById('task-list');
  // create li element
  const li = document.createElement('li');

  // insert task
  li.innerHTML = `
  <p>${task.note}</P>
  <p>${task.date}</P>
  <p>${task.time}</P>
  <p><a href='#' class='delete'>X</a></P>
  `;

  li.className = 'two columns';

  list.appendChild(li);
};

// show alert
UI.prototype.showAlert = function (message, className) {
  // create div
  const div = document.createElement('div');

  // add classes
  div.className = `alert ${className}`;

  // add text
  div.appendChild(document.createTextNode(message));

  // get parent
  const row = document.querySelector('.row');

  // get form
  const form = document.querySelector('#task-form');

  // insert alert
  row.insertBefore(div, form);

  // timeout after 3 sec
  setTimeout(function () {
    document.querySelector('.alert').remove();
  }, 3000);
};

// delete task
UI.prototype.deleteTask = function(target) {
  if (target.className === 'delete') {
    target.parentElement.parentElement.remove()
  }
}

// clear fields
UI.prototype.clearFields = function () {
  document.getElementById('note').value = '';
  document.getElementById('date').value = '';
  document.getElementById('time').value = '';
};

// event listeners for add task
document.getElementById('task-form').addEventListener('submit', function (e) {
  // get form values
  const note = document.getElementById('note').value,
    date = document.getElementById('date').value,
    time = document.getElementById('time').value;

  // instantiate task
  const task = new Task(note, date, time);

  // instantiate UI
  const ui = new UI();

  // validate
  if (note === '' || date === '' || time === '') {
    // show error alert
    ui.showAlert('Please fill in all fields', 'error');
  } else {
    // add task to list
    ui.addTaskToList(task);

    // show success alert
    ui.showAlert('Task Added!', 'success');

    // clear fields
    ui.clearFields();
  }

  e.preventDefault();
});

// event listener for delete
document.getElementById('task-list').addEventListener('click', function(e) {

  // instantiate UI
  const ui = new UI()

  // delete task
  ui.deleteTask(e.target)

  // show message add validation...if show alert
  ui.showAlert('Task Removed!', 'success')

  e.preventDefault()
})