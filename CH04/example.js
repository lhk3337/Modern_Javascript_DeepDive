const userId = 1;
const userName = "Lee";

const user = { id: 1, name: "Lee" };
const users = [
  { id: 1, name: "Lee" },
  { id: 2, name: "kim" },
];
console.log(userId); //1
console.log(userName); //Lee
console.log(user.name); //Lee
users.forEach((el) => console.log(el.name)); //Lee Kim

const result = 10 + 20;
console.log("result:", result);
var res;
console.log(res); //undefined

//값의 할당
console.log("score1", score); //undefined
score = 80; //값의 할당
var score; //변수 선언
console.log("score2", score); //80

//재할당
var score = 80;
score = 90;
console.log(score); //90
