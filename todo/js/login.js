const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const NONE_DISPLAY = "none";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.style.display = NONE_DISPLAY;

  paintGreetings(username);
  localStorage.setItem(USERNAME_KEY, username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello, ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  loginForm.style.display = "flex";
  // enter를 누르거나 submit 클릭 시 발생
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  loginForm.style.display = NONE_DISPLAY;
  paintGreetings(savedUsername);
}
