# 08. 제어문

조건, 반복등으로 실행 흐름을 인위적으로 제어할 수 있는 문
<br />

## 블록문

블록문은 0개 이상의 문을 중괄호로 묶은 것, 하나의 실행단위로 봄 <br />
블록문 끝에 세미콜론(;)을 붙이지 않는다.

```javascript
// 블록문
{
  var foo = 10;
}

// 제어문
var x = 1;
if (x < 10) {
  x++;
}

// 함수 선언문
function sum(a, b) {
  return a + b;
}
```

<br />

## 조건문
### if문
```javascript
if (조건식) {
  // 조건식 참이면 이 코드 실행
} else {
  // 조건식 거짓이면 이 코드 실행
}
```

```javascript
if (조건식 1) {
  // 조건식 1이 참이면 이 코드 실행
} else if (조건식 2){
  // 조건식 2이 참이면 이 코드 실행
} else if (조건식 3){
  // 조건식 3이 참이면 이 코드 실행
} else {
  // 조건식 거짓이면 이 코드 실행
}
```

```javascript
var num = 2;
var kind;

// if 문
if (num > 0) {
  kind = "양수"; // 음수를 구별할 수 없다
}
console.log(kind); // 양수

// if...else 문
if (num > 0) {
  kind = "양수";
} else {
  kind = "음수"; // 0은 음수가 아니다.
}
console.log(kind); // 양수

// if...else if 문
if (num > 0) {
  kind = "양수";
} else if (num < 0) {
  kind = "음수";
} else {
  kind = "영";
}
console.log(kind); // 양수
```

홀수 짝수 감별

```javascript
// x가 짝수이면 result 변수에 문자열 '짝수'를 할당하고, 홀수이면 문자열 '홀수'를 할당한다.
var x = 2;
var result;

if (x % 2) {
  // 2 % 2는 0이다. 이때 0은 false로 암묵적 강제 변환된다.
  result = "홀수";
} else {
  result = "짝수";
}

console.log(result); // 짝수
```

삼항 연산자로 변환

```javascript
var x = 2;

// 0은 false로 취급된다.
var result = x % 2 ? "홀수" : "짝수";
console.log(result); // 짝수
```

단순한 값을 변수에 할당할 경우 삼항 연산자를 사용하면 가독성이 높고, 여러 줄을 실행 하려면 if ...else문을 사용하는것이 가독성 면에서 좋다.

```javascript
var num = 2;

// 0은 false로 취급된다.
var kind = num ? (num > 0 ? "양수" : "음수") : "영";

console.log(kind); // 양수
```

### switch문 <br />

```javascript
switch (표현식) {
  case 표현식1:
    표현식과 표현식1이 일치하면 실행되는 문
    break;
  case 표현식2:
    표현식과 표현식2이 일치하면 실행되는 문
    break;
  case 표현식3:
    표현식과 표현식3이 일치하면 실행되는 문
    break;
  case 표현식4:
    표현식과 표현식4이 일치하면 실행되는 문
    break;
  case 표현식5:
    표현식과 표현식5이 일치하면 실행되는 문
    break;
  default:
    표현식과 일치하는 case 문이 없을 때 실행되는 문
}
```

월을 영어로 변환

```javascript
// 월을 영어로 변환한다. (11 → 'November')
var month = 11;
var monthName;

switch (month) {
  case 1:
    monthName = "January";
    break;
  case 2:
    monthName = "February";
    break;
  case 3:
    monthName = "March";
    break;
  case 4:
    monthName = "April";
    break;
  case 5:
    monthName = "May";
    break;
  case 6:
    monthName = "June";
    break;
  case 7:
    monthName = "July";
    break;
  case 8:
    monthName = "August";
    break;
  case 9:
    monthName = "September";
    break;
  case 10:
    monthName = "October";
    break;
  case 11:
    monthName = "November";
    break;
  case 12:
    monthName = "December";
    break;
  default:
    monthName = "Invalid month";
}

console.log(monthName); // November
```
```javascript
var year = 2000; // 2000년은 윤년으로 2월이 29일이다.
var month = 2;
var days = 0;

switch (month) {
  case 1: case 3: case 5: case 7: case 8: case 10: case 12:
    days = 31;
    break;
  case 4: case 6: case 9: case 11:
    days = 30;
    break;
  case 2:
    // 윤년 계산 알고리즘
    // 1. 연도가 4로 나누어떨어지는 해(2000, 2004, 2008, 2012, 2016, 2020...)는 윤년이다.
    // 2. 연도가 4로 나누어떨어지더라도 연도가 100으로 나누어떨어지는 해(2000, 2100, 2200...)는 평년이다.
    // 3. 연도가 400으로 나누어떨어지는 해(2000, 2400, 2800...)는 윤년이다.
    days = ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) ? 29 : 28;
    break;
  default:
    console.log('Invalid month');
}

console.log(days); // 29

```
<br />

## 반복문
종류 : for문, while문, do ... while문 <br />

### for문
```javascript
for(할당문; 조건식; 증감식){
  조건식이 참일경우 반복 실행될 문
}
```
```javascript
for(let i = 0; i < 2; i++){
  console.log(i); // 0 1
}
```
무한루프
```javascript
for (;;) { ... }
```

중첩 for문
```javascript
for (var i = 1; i <= 6; i++) {
  for (var j = 1; j <= 6; j++) {
    if (i + j === 6) console.log(`[${i}, ${j}]`);
  }
}
```

## while
for문은 반복 횟수가 명확할때 주로 사용하고 while문은 반복 횟수가 불명확할 때 주로 사용
```javascript
var count = 0;

// count가 3보다 작을 때까지 코드 블록을 계속 반복 실행한다.
while (count < 3) {
  console.log(count); // 0 1 2
  count++;
}
```
무한 루프
```javascript
// 조건이 true일때 무한 루프
while (true) { ... }


// 무한루프에서 탈출하려면 break를 사용한다.
var count = 0;

while (true) {
  console.log(count);
  count++;
  // count가 3이면 코드 블록을 탈출한다.
  if (count === 3) break;
} // 0 1 2
```

### do ... while문 
먼저 코드 블록을 실행하고 조건식을 판단하고 참일때까지 반복문을 실행한다.
```javascript
var count = 0;

// count가 3보다 작을 때까지 코드 블록을 계속 반복 실행한다.
do {
  console.log(count);
  count++;
} while (count < 3); // 0 1 2

```
<br />

## break문

코드 블록을 탈출, 다시 말하면 레이블 문, 반복문, switch문의 코드 블록을 탈출

```javascript
if (true) {
  break; // Uncaught SyntaxError: Illegal break statement
}
```

레이블문은 프로그램의 실행 순서를 제어하는데 사용, switch의 case와 default도 레이블 문

```javascript
// foo라는 레이블 식별자가 붙은 레이블 문
foo: console.log("foo");

// foo라는 식별자가 붙은 레이블 블록문
foo: {
  console.log(1);
  break foo; // foo 레이블 블록문을 탈출한다.
  console.log(2);
}

console.log("Done!");
```

중첩 for문에서 break문을 실행하면 내부 for문 탈출하여 외부 for문으로 진입 <br />
외부 for문을 탈출하려면 레이블 문을 사용한다.

```javascript
// outer라는 식별자가 붙은 레이블 for 문
outer: for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    // i + j === 3이면 outer라는 식별자가 붙은 레이블 for 문을 탈출한다. i = 1 j = 2일때 완전 for문을 빠져 나감
    if (i + j === 3) break outer;
    console.log(`inner [${i}, ${j}]`);
  }
}

console.log("Done!");
```

```javascript
var string = "Hello World.";
var search = "l";
var index;

// 문자열은 유사배열이므로 for 문으로 순회할 수 있다.
for (var i = 0; i < string.length; i++) {
  // 문자열의 개별 문자가 'l'이면
  if (string[i] === search) {
    index = i;
    break; // 반복문을 탈출한다.
  }
}

console.log(index); // 2

// 참고로 String.prototype.indexOf 메서드를 사용해도 같은 동작을 한다.
console.log(string.indexOf(search)); // 2
```

<br />

## continue문

continue문은 반복문의 코드 블록 실행을 현 지점에서 중단하고 반복문의 증감식으로 실행 흐름을 이동시킨다. <br />
break문처럼 반복문을 탈출하지 않는다.

```javascript
var string = "Hello World.";
var search = "l";
var count = 0;

// 문자열은 유사배열이므로 for 문으로 순회할 수 있다.
for (var i = 0; i < string.length; i++) {
  // 'l'이 아니면 현 지점에서 실행을 중단하고 반복문의 증감식으로 이동한다.
  if (string[i] !== search) continue;
  count++; // continue 문이 실행되면 이 문은 실행되지 않는다.
}

console.log(count); // 3

// 참고로 String.prototype.match 메서드를 사용해도 같은 동작을 한다.
const regexp = new RegExp(search, "g");
console.log(string.match(regexp).length); // 3
```

```javascript
for (var i = 0; i < string.length; i++) {
  // 'l'이면 카운트를 증가시킨다.
  if (string[i] === search) count++;
}
```

if문에서 실행 코드가 여러 줄이라면 continue문을 사용하면 가독성이 더 좋음

```javascript
// continue 문을 사용하지 않으면 if 문 내에 코드를 작성해야 한다.
for (var i = 0; i < string.length; i++) {
  // 'l'이면 카운트를 증가시킨다.
  if (string[i] === search) {
    count++;
    // code
    // code
    // code
  }
}

// continue 문을 사용하면 if 문 밖에 코드를 작성할 수 있다.
for (var i = 0; i < string.length; i++) {
  // 'l'이 아니면 카운트를 증가시키지 않는다.
  if (string[i] !== search) continue;

  count++;
  // code
  // code
  // code
}
```
