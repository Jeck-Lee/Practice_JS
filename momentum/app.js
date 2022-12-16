const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");


function onLoginBtnClick(){
    alert("Hello " + username);
}
loginButton.addEventListener("click",onLoginBtnClick);