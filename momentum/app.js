// prompt는 옛날 문법
const age = prompt("How old are you?");

// 변수의 타입 get
// prompt 입력값은 기본적으로 string
 console.log(typeof age, " ", age);

 // parseInt(숫자가 아닌 값) -> NaN(Not a Number)
console.log(typeof parseInt(age), " ", parseInt(age));