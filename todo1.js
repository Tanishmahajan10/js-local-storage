// // // ---------- localStorage basics ----------
// // // localStorage stores key/value pairs in the browser. It survives page
// // // refreshes and browser restarts. Values must be STRINGS, so:
// // //   localStorage.setItem(key, string)   -> save
// // //   localStorage.getItem(key)           -> read (null if missing)
// // //   localStorage.removeItem(key)        -> delete one key
// // //   localStorage.clear()                -> delete everything
// // // For arrays/objects use JSON.stringify() to save and JSON.parse() to read.

// // const STORAGE_KEY = "todos";

// // const form = document.getElementById("todo-form");
// // const input = document.getElementById("todo-input");
// // const list = document.getElementById("todo-list");
// // const emptyMsg = document.getElementById("empty-msg");
// // const count = document.getElementById("count");
// // const clearDone = document.getElementById("clear-done");

// // // 1. LOAD: runs once when the page opens
// // function loadTodos() {
// //   const saved = localStorage.getItem(STORAGE_KEY); // string or null
// //   return saved ? JSON.parse(saved) : [];           // string -> array
// // }

// // // 2. SAVE: call this after every change
// // function saveTodos() {
// //   localStorage.setItem(STORAGE_KEY, JSON.stringify(todos)); // array -> string
// // }

// // let todos = loadTodos(); // e.g. [{ id: 1, text: "Buy milk", done: false }]

// // // ---------- Rendering ----------
// // function render() {
// //   list.innerHTML = "";

// //   todos.forEach((todo) => {
// //     const li = document.createElement("li");
// //     if (todo.done) li.classList.add("done");

// //     const checkbox = document.createElement("input");
// //     checkbox.type = "checkbox";
// //     checkbox.checked = todo.done;
// //     checkbox.addEventListener("change", () => toggleTodo(todo.id));

// //     const text = document.createElement("span");
// //     text.textContent = todo.text; // textContent is safe from HTML injection

// //     const del = document.createElement("button");
// //     del.className = "delete";
// //     del.textContent = "✕";
// //     del.setAttribute("aria-label", "Delete task");
// //     del.addEventListener("click", () => deleteTodo(todo.id));

// //     li.append(checkbox, text, del);
// //     list.appendChild(li);
// //   });

// //   const remaining = todos.filter((t) => !t.done).length;
// //   count.textContent = `${remaining} left`;
// //   emptyMsg.hidden = todos.length > 0;
// // }

// // // ---------- Actions (each one saves, then re-renders) ----------
// // function addTodo(text) {
// //   todos.push({ id: Date.now(), text, done: false });
// //   saveTodos();
// //   render();
// // }

// // function toggleTodo(id) {
// //   const todo = todos.find((t) => t.id === id);
// //   todo.done = !todo.done;
// //   saveTodos();
// //   render();
// // }

// // function deleteTodo(id) {
// //   todos = todos.filter((t) => t.id !== id);
// //   saveTodos();
// //   render();
// // }

// // // ---------- Events ----------
// // form.addEventListener("submit", (e) => {
// //   e.preventDefault(); // stop the page from reloading
// //   const text = input.value.trim();
// //   if (!text) return;
// //   addTodo(text);
// //   input.value = "";
// //   input.focus();
// // });

// // clearDone.addEventListener("click", () => {
// //   todos = todos.filter((t) => !t.done);
// //   saveTodos();
// //   render();
// // });

// // render(); // first draw using whatever was loaded from localStorage


// // localStorage stores only STRINGS, so:
// //   localStorage.setItem("todos", string)  -> save
// //   localStorage.getItem("todos")          -> read (null if nothing saved)
// // Arrays need JSON.stringify (to save) and JSON.parse (to read).

// const form = document.getElementById("todo-form");
// const input = document.getElementById("todo-input");
// const list = document.getElementById("todo-list");
// const emptyMsg = document.getElementById("empty-msg");
// const count = document.getElementById("count");
// const clearDone = document.getElementById("clear-done");

// // Each todo looks like: { text: "Buy milk", done: false }
// let todos = [];

// // ---------- Load ----------
// function loadTodos() {
//   const saved = localStorage.getItem("todos");
//   if (saved !== null) {
//     todos = JSON.parse(saved);
//   }
// }

// // ---------- Save ----------
// function saveTodos() {
//   localStorage.setItem("todos", JSON.stringify(todos));
// }

// // ---------- Show todos on screen ----------
// function render() {
//   list.innerHTML = "";
//   let remaining = 0;

//   for (let i = 0; i < todos.length; i++) {
//     const li = document.createElement("li");

//     const checkbox = document.createElement("input");
//     checkbox.type = "checkbox";
//     checkbox.checked = todos[i].done;
//     checkbox.onchange = function () {
//       toggleTodo(i);
//     };

//     const text = document.createElement("span");
//     text.textContent = todos[i].text;

//     const del = document.createElement("button");
//     del.className = "delete";
//     del.textContent = "✕";
//     del.onclick = function () {
//       deleteTodo(i);
//     };

//     if (todos[i].done) {
//       li.classList.add("done");
//     } else {
//       remaining = remaining + 1;
//     }

//     li.appendChild(checkbox);
//     li.appendChild(text);
//     li.appendChild(del);
//     list.appendChild(li);
//   }

//   count.textContent = remaining + " left";
//   emptyMsg.hidden = todos.length > 0;
// }

// // ---------- Add / toggle / delete ----------
// function addTodo(text) {
//   todos.push({ text: text, done: false });
//   saveTodos();
//   render();
// }

// function toggleTodo(index) {
//   todos[index].done = !todos[index].done;
//   saveTodos();
//   render();
// }

// function deleteTodo(index) {
//   todos.splice(index, 1); // remove 1 item at this position
//   saveTodos();
//   render();
// }

// // ---------- Events ----------
// form.onsubmit = function (event) {
//   event.preventDefault(); // stop page reload
//   const text = input.value.trim();
//   if (text === "") {
//     return;
//   }
//   addTodo(text);
//   input.value = "";
// };

// clearDone.onclick = function () {
//   const remainingTodos = [];
//   for (let i = 0; i < todos.length; i++) {
//     if (!todos[i].done) {
//       remainingTodos.push(todos[i]);
//     }
//   }
//   todos = remainingTodos;
//   saveTodos();
//   render();
// };

// // ---------- Start ----------
// loadTodos();
// render();


// localStorage stores only STRINGS, so for an array we use:
//   JSON.stringify(array)  -> array to string (to save)
//   JSON.parse(string)     -> string to array (to read)

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