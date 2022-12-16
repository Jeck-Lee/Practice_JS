const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");


function onLoginBtnClick(){
   const username = loginInput.value;
    if (username === "") {
        alert("Please write your name!");
    }
    else if (username.length > 15) {
        alert("your name is too long");
    }
    else {
        alert("Hello " + username);
    }
}
loginButton.addEventListener("click",onLoginBtnClick);