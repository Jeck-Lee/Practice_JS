const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const toDoForm = document.getElementById("todo-form");
const toDoBox = document.querySelector(".box");

const HIDDEN_CLASSNAME = "hidden";
const NONE_DISPLAY = "none";
const FLEX_DISPLAY = "flex";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  paintToDoAndHideLogin();
  paintGreetings(username);
  localStorage.setItem(USERNAME_KEY, username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello, ${username}`;
}
function paintLoginAndHideToDo() {
  loginForm.style.display = FLEX_DISPLAY;
  toDoForm.style.display = NONE_DISPLAY;
  toDoBox.style.display = NONE_DISPLAY;
}
function paintToDoAndHideLogin() {
  loginForm.style.display = NONE_DISPLAY;
  toDoForm.style.display = FLEX_DISPLAY;
  toDoBox.style.display = FLEX_DISPLAY;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  paintLoginAndHideToDo();
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
  paintToDoAndHideLogin();
}
