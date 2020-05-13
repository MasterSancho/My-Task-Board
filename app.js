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
  console.log('test');

  e.preventDefault();
});
