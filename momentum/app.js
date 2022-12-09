// Object
const player = {
    name: "Jeck",
    points: 10,
    fat: true,
};

console.log(player);
console.log(player.name);

// 상수로 선언한 객제 내 변수는 변경 가능
player.points = 20;
console.log(player);

// 코드 상에서 객체의 프로퍼티 추가 가능
player.lastName = "Family"
console.log(player);