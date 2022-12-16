const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    // 이벤트의 기본 행동이 발생되지 않도록 막는 함수 -> 새로고침 안 됨
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    // greeting.innerText = "Hello, " + username;
    // warning: single or double quatation 아님
    greeting.innerText = `Hello, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// enter를 누르거나 submit 클릭 시 발생
loginForm.addEventListener("submit", onLoginSubmit);