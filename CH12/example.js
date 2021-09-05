//함수 호출
function add(x, y) {
  console.log(x, y);
}
var result = add(2, 5);
console.log(typeof add());

(function bar() {
  console.log("bar");
});

bar();

//============================================================
// 함수 호이스팅
console.dir(add);
console.dir(sub);

console.log(add(2, 5));
console.log(sub(2, 5));

function add(x, y) {
  return x + y;
}

var sub = function (x, y) {
  return x - y;
};
