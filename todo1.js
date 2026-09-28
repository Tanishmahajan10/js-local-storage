// // // ---------- localStorage basics ----------  JSON.parse(string)     -> string to array (to read)

const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const emptyMsg = document.getElementById("empty-msg");
const count = document.getElementById("count");
const clearDone = document.getElementById("clear-done");

// Just a list of texts, like: ["Buy milk", "Study JS"]
let todos = [];

// ---------- Load ----------
function loadTodos() {
  const saved = localStorage.getItem("todos");
  if (saved !== null) {
    todos = JSON.parse(saved);
  }
}

// ---------- Save ----------
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// ---------- Show todos on screen ----------
function render() {
  list.innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    const li = document.createElement("li");

    const text = document.createElement("span");
    text.textContent = todos[i];

    const del = document.createElement("button");
    del.className = "delete";
    del.textContent = "✕";
    del.onclick = function () {
      deleteTodo(i);
    };

    li.appendChild(text);
    li.appendChild(del);
    list.appendChild(li);
  }

  count.textContent = todos.length + " tasks";
  emptyMsg.hidden = todos.length > 0;
}

// ---------- Add / delete ----------
function addTodo(text) {
  todos.push(text);
  saveTodos();
  render();
}

function deleteTodo(index) {
  todos.splice(index, 1); // remove 1 item at this position
  saveTodos();
  render();
}

function deleteall() {
  todos = [];
  saveTodos();
  render();
}



// ---------- Events ----------
form.onsubmit = function (event) {
  event.preventDefault(); // stop page reload
  const text = input.value.trim();
  if (text === "") {
    return;
  }
  addTodo(text);
  input.value = "";
};

clearDone.onclick = deleteall;

// ---------- Start ----------
loadTodos();
render();