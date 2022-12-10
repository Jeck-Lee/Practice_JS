/**
 * document: 작성한 HTML을 가리키는 객체
 * -> 이를 통해 JavaScript에서 HTML read/write 가능
 */
/**
 * document.getElementById([String])
 * -> 해당 id를 가진 태그를 가져올 수 있음
 */
const title = document.getElementById("title");

// element를 더 자세하게 보여줌
console.dir(title);

title.innerText = "Got you"
console.dir(title);