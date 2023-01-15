const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

function saveToDos() {
    // toDos를 그냥 저장하면 "a,b,c"의 텍스트로 저장됨
    // stringify를 사용할 시, ["a","b","c"]의 형태로 저장됨
    localStorage.setItem("toDos", JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    toDoList.removeChild(li);
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo;
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    saveToDos();
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);