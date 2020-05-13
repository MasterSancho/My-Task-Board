// book constructor
class Task {
  constructor(note, date, time) {
    this.note = note;
    this.date = date;
    this.time = time;
  }
}

// ui constructor
class UI {
  // add task to list
  addTaskToList = function (task) {
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
  showAlert = function (message, className) {
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
  deleteTask = function (target) {
    if (target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  };

  // clear fields
  clearFields = function () {
    document.getElementById('note').value = '';
    document.getElementById('date').value = '';
    document.getElementById('time').value = '';
  };
}

// local storage class
class Store {
  static getTasks() {
    let tasks;

    if (localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    return tasks;
  }

  static displayTasks() {
    const tasks = Store.getTasks();

    tasks.forEach(function (task) {
      const ui = new UI();

      // add task to UI
      ui.addTaskToList(task);
    });
  }

  static addTask(task) {
    const tasks = Store.getTasks();

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  static removeTask(note) {
    console.log(note)
    const tasks = Store.getTasks();

    tasks.forEach(function (task, index) {
      if (task.note === note) {
        tasks.splice(index, 1);
      }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}

// DOM load event
document.addEventListener('DOMContentLoaded', Store.displayTasks);

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

    // add to LC
    Store.addTask(task);

    // show success alert
    ui.showAlert('Task Added!', 'success');

    // clear fields
    ui.clearFields();
  }

  e.preventDefault();
});

// event listener for delete
document.getElementById('task-list').addEventListener('click', function (e) {
  // instantiate UI
  const ui = new UI();

  // delete task
  ui.deleteTask(e.target);

  // remove from LC
  Store.removeTask(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent);

  // show message 
  ui.showAlert('Task Removed!', 'success');

  e.preventDefault();
});
