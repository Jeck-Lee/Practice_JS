const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    console.log("title was clicked!");
    h1.style.color = "blue";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy() {
    alert("Copier!");
}
function handleWindowOffline() {
    alert("no wifi");
}
function handleWindowOnline() {
    alert("!!--wifi--!!");
}

// title.onclick = handleTitleClick; 와 동일
// addEventListener를 사용할 경우, removeEventListener로 삭제도 가능
h1.addEventListener("click", handleTitleClick);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);