/**
 * document: 작성한 HTML을 가리키는 객체
 * -> 이를 통해 JavaScript에서 HTML read/write 가능
 */
/**
 * document.getElementsByClassName([String])
 * -> 해당 class name을 가진 태그를 가져올 수 있음
 * -> 많은 element를 한 번에 가지고 와야하는 경우 사용 가능(getElementById는 첫번째꺼 하나만 가져오는 듯)
 */
const hellos = document.getElementsByClassName("hello");

/**
 * document.querySelector
 * -> element를 CSS 방식으로 검색할 수 있음 = hello란 class 내부에 있는 h1 태그를 가지고 올 수 있음
 * -> getElementById처럼, 여러개가 있을 경우 첫 번째 하나만 return
 */
const title = document.querySelector(".hello h1");
console.log(title);

const titles = document.querySelectorAll(".hello h1");
console.log(titles);

/**
 * querySelector로 id에 해당하는 element를 가져올 수도 있음.
 * 아래 두 코드는 같은 element를 return
 */
document.getElementById("hello");
document.querySelector("#hello");
// .: class name을 찾고 있음 / #: id를 찾고 있음