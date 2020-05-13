// book constructor
function Note(note, date, time) {
  this.note = note;
  this.date = date;
  this.time = time;
}

// ui constructor
function UI() {}

// event listeners
document.getElementById('note-form').addEventListener('submit', function (e) {
  const note = document.getElementById('note').value,
        date = document.getElementById('date').value,
        time = document.getElementById('time').value;

  console.log(note, date, time);

  e.preventDefault();
});
