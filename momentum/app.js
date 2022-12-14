const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    const activeClass = "active"
    if (h1.className === activeClass) {
        h1.className = "";
    }
    else {
        // CSS 파일에서 선언한 클래스 이름과 같아야 함
        h1.className = activeClass;
    }
}

// title.onclick = handleTitleClick; 와 동일
// addEventListener를 사용할 경우, removeEventListener로 삭제도 가능
h1.addEventListener("click", handleTitleClick);
