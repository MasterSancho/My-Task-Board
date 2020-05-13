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
  console.log(task);
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

  // add task to list
  ui.addTaskToList(task);

  e.preventDefault();
});
