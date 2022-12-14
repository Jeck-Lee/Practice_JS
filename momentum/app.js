const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    /**
     * 
    const activeClass = "active"
    if (h1.classList.contains(activeClass)) {
        h1.classList.remove(activeClass);
    }
    else {
        h1.classList.add(activeClass);
    }

    위 코드를 아래처럼 간략화할 수 있음
     */
    h1.classList.toggle("active");
}

// title.onclick = handleTitleClick; 와 동일
// addEventListener를 사용할 경우, removeEventListener로 삭제도 가능
h1.addEventListener("click", handleTitleClick);
