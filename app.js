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

// clear fields
UI.prototype.clearFields = function () {
  document.getElementById('note').value = '';
  document.getElementById('date').value = '';
  document.getElementById('time').value = '';
};

// event listeners
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
    alert('Failed');
  } else {
    // add task to list
    ui.addTaskToList(task);

    // clear fields
    ui.clearFields();
  }

  e.preventDefault();
});
