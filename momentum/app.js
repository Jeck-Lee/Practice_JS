const loginForm = document.getElementById("login-form");

function onLoginSubmit(info) {
    // 이벤트의 기본 행동이 발생되지 않도록 막는 함수 -> 새로고침 안 됨
    info.preventDefault();
    console.log(info);
}

// enter를 누르거나 submit 클릭 시 발생
loginForm.addEventListener("submit", onLoginSubmit);