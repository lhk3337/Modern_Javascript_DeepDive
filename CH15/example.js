//function level scope
var i = 10;
for (var i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i); //5

var x = 1;
if (true) {
  var x = 10;
}

console.log("x =", x); //10

// hoisting;
console.log(foo);
var foo;
foo = 1;
console.log(foo);

var foo = 123;
var foo = 456;

let bar = 123;
let bar = 456;

let foo = 1;

{
  let foo = 2;
  let bar = 3;
  console.log(foo); //2
}
console.log(foo); //1
// console.log(bar); //ReferenceError: bar is not defined

console.log(foo1);
let foo1;
