// let submit = document.getElementById("submit");
// let todos = document.getElementById("todos");
// submit.addEventListener("click", (e) => {
//   console.log(e);
//   e.preventDefault()
//   let obj = {
//     title:todos.value
//   }
//   let value = todos.value;
//   localStorage.setItem("todo", JSON.stringify(value ));
// //   localStorage.setItem("todo", JSON.stringify(obj));
//   console.log(todos.value);
//   todos.value = "";
// });
let submit = document.getElementById("submit");
let todoInput = document.getElementById("todoInput");
let delBtn = document.getElementById("delBtn");
let list = document.getElementById("list");
let i = localStorage.getItem('i') || 0;


    // Retrieve existing todos from localStorage
var todosArray = JSON.parse(localStorage.getItem("todos")) || [];

function freshVisit() {
  for (i = 0; i < todosArray.length; i++) {
    var ul = document.createElement("ul");
    ul.innerText = todosArray[i].title
    console.log(todosArray[i].title);
    list.appendChild(ul);
  }
}

freshVisit();

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let todo = {
    title: todoInput.value,
    completed: false,
  };
  if (todo.title == '') {
    console.error("Invalid value for todo. DID NOT ADD!");
  } else {

    // Add the new todo object to the existing todos array
    todosArray.push(todo);
    for (i = 0; i < todosArray.length; i++) {
      var ul = document.createElement("ul");
      ul.innerText = todosArray[i].title
      console.log(todo.title);
    }
    list.appendChild(ul);
    // Save the updated todos array back to localStorage
    localStorage.setItem('i', i);
    localStorage.setItem("todos", JSON.stringify(todosArray));

    // Clear the input field
    todoInput.value = "";
  }
});

delBtn.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.clear("todos");
  todoInput.value = "";
  list.innerHTML = ""
});
