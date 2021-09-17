var integer = 10; // 정수
var double = 10.12; // 실수
var negative = -20; // 음의 정수
console.log(integer);
console.log(double);
console.log(negative);
console.log("=================");
var binary = 0b01000001; // 2진수
var octal = 0o101; // 8진수
var hex = 0x41; // 16진수

// 표기법만 다를 뿐 모두 같은 값이다.
console.log(binary); // 65
console.log(octal); // 65
console.log(hex); // 65
console.log(binary === octal); // true
console.log(octal === hex); // true

var x = NaN;
console.log(x);
var template = '<ul>\n\t<li><a href="#">Home</a></li>\n</ul>';
console.log(template);

var first = "HK";
var last = "L";

console.log("My name is " + last + " " + first); // 일반 문자열로 표시할 때
console.log(`My name is ${last} ${first}`);

let fo = "lee";
fo = null;
console.log(fo);

console.clear();

var key = Symbol("key");
console.log(typeof key);

var obj = {};
obj[key] = "value";
console.log(obj[key]);

console.clear();

var foo;
console.log(typeof foo); // undefined

foo = 3;
console.log(typeof foo); // number

foo = "Hello";
console.log(typeof foo); // string

foo = true;
console.log(typeof foo); // boolean

foo = null;
console.log(typeof foo); // object

foo = Symbol(); // 심벌
console.log(typeof foo); // symbol

foo = {}; // 객체
console.log(typeof foo); // object

foo = []; // 배열
console.log(typeof foo); // object

foo = function () {}; // 함수
console.log(typeof foo); // function
