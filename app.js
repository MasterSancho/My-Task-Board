// book constructor
function Task(note, date, time) {
  this.note = note;
  this.date = date;
  this.time = time;
}

// ui constructor
function UI() {}

// event listeners
document.getElementById('task-form').addEventListener('submit', function (e) {
  // get form values
  const note = document.getElementById('note').value,
    date = document.getElementById('date').value,
    time = document.getElementById('time').value;

  // instantiate book
  const task = new Task(note, date, time);

  console.log(task)

  e.preventDefault();
});
