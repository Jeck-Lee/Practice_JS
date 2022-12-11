const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    console.log("title was clicked!");
    title.style.color = "blue";
}

// title.onclick = handleTitleClick; 와 동일
// addEventListener를 사용할 경우, removeEventListener로 삭제도 가능
title.addEventListener("click", handleTitleClick);