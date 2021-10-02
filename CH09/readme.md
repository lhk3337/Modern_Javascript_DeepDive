# 09. 타입 변환과 단축 평가

## 타입 변환이란?

JS에서 타입은 명시적 타입(개발자가 의도적으로 타입 변환)과 암묵적 타입(JS엔진에 의해 암묵적으로 타입이 자동 변환)이 있음

```javascript
// 명시적 타입 변환
// 숫자를 문자열로 타입 변환
var x = 10;

var str = x.toString();
console.log(typeof str, str); // string 10

// x 변수의 값이 변경된 것은 아님
console.log(typeof x, x); // number 10
```

```javascript
// 암묵적 타입 변환

var str = x + "";
console.log(typeof str, str); // string 10

console.log(typeof x, x); // number 10
```

타입 변환이란 기존 원시 값을 사용해 다른 타입의 새로운 원시 값을 생성하는 것

<br />

## 암묵적 타입 변환

JS 엔진에 의해 암묵적으로 타입이 변경

```javascript
"10" + 2; // '102'

5 * "10"; // 50

!0; // true

if (1) {
  //무조건 true 조건
}
```

<br />

### 문자열 타입으로 변환

```javascript
1 + "2"; // "12"
```

<br />

+연산자는 피연산자 중 하나 이상이 문자열이므로 문자열 연결 연산자로 동작
문자열 + 숫자이면 문자열로 암묵적으로 변환

```javascript
// 숫자 타입
0 + ''         // -> "0"
-0 + ''        // -> "0"
1 + ''         // -> "1"
-1 + ''        // -> "-1"
NaN + ''       // -> "NaN"
Infinity + ''  // -> "Infinity"
-Infinity + '' // -> "-Infinity"

// 불리언 타입
true + ''  // -> "true"
false + '' // -> "false"

// null 타입
null + '' // -> "null"

// undefined 타입
undefined + '' // -> "undefined"

// 심벌 타입
(Symbol()) + '' // -> TypeError: Cannot convert a Symbol value to a string

// 객체 타입
({}) + ''           // -> "[object Object]"
Math + ''           // -> "[object Math]"
[] + ''             // -> ""
[10, 20] + ''       // -> "10,20"
(function(){}) + '' // -> "function(){}"
Array + ''          // -> "function Array() { [native code] }"
```

<br />

### 숫자 타입으로 변환

```javascript
1 - "1"; // -> 0
1 * "10"; // -> 10
1 / "one"; // -> NaN
```

- 산술연산자는 숫자 값을 만드는 역할이고 산술 연산자의 모든 피연산자는 숫자 타입이어야 한다.
- JS 엔진에서 산술 연산자의 피연산자 중에서 숫자 타입이 아닌 피연산자를 숫자 타입으로 암묵적으로 변환한다.
- 만일 피연산자를 숫자 타입으로 변환하지 못하면 NaN으로 리턴한다.

```javascript
"1" > 0; // -> true, "1"이 암묵적으로 숫자 1로 변경 되고 조건문을 실행
```

<br />

숫자 타입이 아닌 값을 숫자 타입으로 암묵적으로 타입 변환을 수행 할때 아래 코드로 동작

```javascript
// 문자열 타입
+"" + // -> 0
  "0" + // -> 0
  "1" + // -> 1
  "string" + // -> NaN
  // 불리언 타입
  true + // -> 1
  false + // -> 0
  // null 타입
  null + // -> 0
  // undefined 타입
  undefined + // -> NaN
  // 심벌 타입
  Symbol() + // -> ypeError: Cannot convert a Symbol value to a number
  // 객체 타입
  {} + // -> NaN
  [] + // -> 0
  [10, 20] + // -> NaN
  function () {}; // -> NaN
```

- 빈 문자열, 빈 배열, null, false는 0으로, true는 1로 변환
- 객체나 빈 배열이 아닌 배열, undefined는 변환되자 않아 NaN이 됨

<br />

### boolean 타입으로 변환

```javascript
if ("") console.log("1"); //if false
if (true) console.log("2"); // if true
if (0) console.log("3"); // if false
if ("str") console.log("4"); //if true
if (null) console.log("5"); // if null

// 2 4
```

<br />

false, undefined, null, -, 0-, NaN, ''(빈 문자열) -> 암묵적으로 false로 리턴

```javascript
// 아래의 조건문은 모두 코드 블록을 실행한다.
if (!false) console.log(false + " is falsy value");
if (!undefined) console.log(undefined + " is falsy value");
if (!null) console.log(null + " is falsy value");
if (!0) console.log(0 + " is falsy value");
if (!NaN) console.log(NaN + " is falsy value");
if (!"") console.log("" + " is falsy value");
```

<br />

true and false 판별하는 코드

```javascript
// 전달받은 인수가 Falsy 값이면 true, Truthy 값이면 false를 반환한다.
function isFalsy(v) {
  return !v;
}

// 전달받은 인수가 Truthy 값이면 true, Falsy 값이면 false를 반환한다.
function isTruthy(v) {
  return !!v;
}

// 모두 true를 반환한다.
isFalsy(false);
isFalsy(undefined);
isFalsy(null);
isFalsy(0);
isFalsy(NaN);
isFalsy("");

// 모두 true를 반환한다.
isTruthy(true);
isTruthy("0"); // 빈 문자열이 아닌 문자열은 Truthy 값이다.
isTruthy({});
isTruthy([]);
```

<br />

## 명시적 타입 변환

개발자의 의도에 따라 명시적으로 타입을 변경

<br />

### 문자열 타입으로 변환

- String 생성자 함수를 new연산자 없이 호츌
- Object.prototype.toString 메서드를 사용하는 방법
- 문자열 연결 연산자를 이용하는 방법

```javascript
// 1. String 생성자 함수를 new 연산자 없이 호출하는 방법
// 숫자 타입 => 문자열 타입
String(1); // -> "1"
String(NaN); // -> "NaN"
String(Infinity); // -> "Infinity"
// 불리언 타입 => 문자열 타입
String(true); // -> "true"
String(false); // -> "false"

// 2. Object.prototype.toString 메서드를 사용하는 방법
// 숫자 타입 => 문자열 타입
(1).toString(); // -> "1"
NaN.toString(); // -> "NaN"
Infinity.toString(); // -> "Infinity"
// 불리언 타입 => 문자열 타입
true.toString(); // -> "true"
false.toString(); // -> "false"

// 3. 문자열 연결 연산자를 이용하는 방법
// 숫자 타입 => 문자열 타입
1 + ""; // -> "1"
NaN + ""; // -> "NaN"
Infinity + ""; // -> "Infinity"
// 불리언 타입 => 문자열 타입
true + ""; // -> "true"
false + ""; // -> "false"
```

<br />

### 숫자 타입으로 변환

- Number 생성자 함수를 new 연산자 없이 호출
- parseInt, parseFloat 함수를 사용하는 방법(문자열만 숫자 타입으로 변환 가능)
- (+) 단항 산술 연산자를 이용하는 방법
- (\*) 산술 연사자를 이용하는 방법

```javascript
// 1. Number 생성자 함수를 new 연산자 없이 호출하는 방법
// 문자열 타입 => 숫자 타입
Number("0"); // -> 0
Number("-1"); // -> -1
Number("10.53"); // -> 10.53
// 불리언 타입 => 숫자 타입
Number(true); // -> 1
Number(false); // -> 0

// 2. parseInt, parseFloat 함수를 사용하는 방법(문자열만 변환 가능)
// 문자열 타입 => 숫자 타입
parseInt("0"); // -> 0
parseInt("-1"); // -> -1
parseFloat("10.53"); // -> 10.53

// 3. + 단항 산술 연산자를 이용하는 방법
// 문자열 타입 => 숫자 타입
+"0"; // -> 0
+"-1"; // -> -1
+"10.53"; // -> 10.53
// 불리언 타입 => 숫자 타입
+true; // -> 1
+false; // -> 0

// 4. * 산술 연산자를 이용하는 방법
// 문자열 타입 => 숫자 타입
"0" * 1; // -> 0
"-1" * 1; // -> -1
"10.53" * 1; // -> 10.53
// 불리언 타입 => 숫자 타입
true * 1; // -> 1
false * 1; // -> 0
```

  <br />

### boolean 타입으로 변환

<br />

- Boolean 생성자 함수를 new 연산자 없이 호출
- ! 부정 논리 연산자를 두번 사용하는 방법

```javascript
// 1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
// 문자열 타입 => 불리언 타입
Boolean("x"); // -> true
Boolean(""); // -> false
Boolean("false"); // -> true
// 숫자 타입 => 불리언 타입
Boolean(0); // -> false
Boolean(1); // -> true
Boolean(NaN); // -> false
Boolean(Infinity); // -> true
// null 타입 => 불리언 타입
Boolean(null); // -> false
// undefined 타입 => 불리언 타입
Boolean(undefined); // -> false
// 객체 타입 => 불리언 타입
Boolean({}); // -> true
Boolean([]); // -> true

// 2. ! 부정 논리 연산자를 두번 사용하는 방법
// 문자열 타입 => 불리언 타입
!!"x"; // -> true
!!""; // -> false
!!"false"; // -> true
// 숫자 타입 => 불리언 타입
!!0; // -> false
!!1; // -> true
!!NaN; // -> false
!!Infinity; // -> true
// null 타입 => 불리언 타입
!!null; // -> false
// undefined 타입 => 불리언 타입
!!undefined; // -> false
// 객체 타입 => 불리언 타입
!!{}; // -> true
!![]; // -> true
```

<br />

## 단축 평가

| 단축 평가 표현식    | 평가 결과 |
| ------------------- | --------- |
| true \|\| anything  | true      |
| false \|\| anything | anything  |
| true && anything    | anything  |
| false && anything   | false     |

<br />

### 논리 연산자를 사용한 단축 평가

논리곱(&&)에서 첫번째가 true이고, 두번째 피연산자가 true일 경우 두번째 피연산자가 반환된다.

```javascript
"Cat" && "Dog"; // -> "Dog"
```

<br />

논리합(||)에서 첫번째가 true일 경우, 두번째가 피연산자가 true / false 상관없이 첫번째 피연산자가 반환된다.

```javascript
"Cat" || "Dog"; // -> "Cat"
```

- 논리곱 연산자와 논리합 연산자는 이처럼 논리 연산의 결과를 결정하는 피연산자를 타입 변환하지 않고 그대로 반환
- 이를 단축 평가라 하고, 이것은 표현식을 평가하는 도중에 평가 결과가 확정된 경우 나머지 평가 과정을 생략한다.

<br />

```javascript
// 논리합(||) 연산자
"Cat" || "Dog"; // -> "Cat"
false || "Dog"; // -> "Dog"
"Cat" || false; // -> "Cat"

// 논리곱(&&) 연산자
"Cat" && "Dog"; // -> "Dog"
false && "Dog"; // -> false
"Cat" && false; // -> false
```

<br />

단축 평가를 if문으로 대체

```javascript
//조건이 true일떄
var done = true;
var message = "";

// 주어진 조건이 true일 때
if (done) message = "완료";

// if 문은 단축 평가로 대체 가능하다.
// done이 true라면 message에 '완료'를 할당
message = done && "완료";
console.log(message); // 완료
```

```javascript
//조건이 false일때
var done = false;
var message = "";

// 주어진 조건이 false일 때
if (!done) message = "미완료";

// if 문은 단축 평가로 대체 가능하다.
// done이 false라면 message에 '미완료'를 할당
message = done || "미완료";
console.log(message); // 미완료
```

<br />

if else 대신 삼항 조건 연산자로 대체 가능

```javascript
var done = true;
var message = "";

// if...else 문
if (done) message = "완료";
else message = "미완료";
console.log(message); // 완료

// 삼항 조건 연산자
message = done ? "완료" : "미완료";
console.log(message); // 완료
```

<br />

객체의 값이 null, undefined 인 경우 객체의 프로퍼티를 참조하면 타입 에러 발생

```javascript
var elem = null;
var value = elem.value; // TypeError: Cannot read property 'value' of null
```

단축 평가 사용

```javascript
var elem = null;
// elem이 null이나 undefined와 같은 Falsy 값이면 elem으로 평가되고
// elem이 Truthy 값이면 elem.value로 평가된다.
var value = elem && elem.value; // -> null
```

<br />

<p>
함수 호출할때 인수를 전달하지 않으면 매개변수에는 undefined가 할당 됨,

단축 평가를 이용하면 undefined로 인해 발생하는 여러 에러를 방지 할 수 있다.

</p>

```javascript
// 단축 평가를 사용한 매개변수의 기본값 설정
function getStringLength(str) {
  str = str || "";
  return str.length;
}

getStringLength(); // -> 0
getStringLength("hi"); // -> 2

// ES6의 매개변수의 기본값 설정
function getStringLength(str = "") {
  return str.length;
}

getStringLength(); // -> 0
getStringLength("hi"); // -> 2
```

<br />

### 옵셔널 체이닝 연산자

<br />

ES11에서 도입된 연산자, 좌항의 피연산자가 null 또는 undefined인 경우 undefined를 반환하고, 그렇지 않으면 우항의 프로퍼티 참조

```javascript
var elem = null;

// elem이 null 또는 undefined이면 undefined를 반환하고, 그렇지 않으면 우항의 프로퍼티 참조를 이어간다.
var value = elem?.value;
console.log(value); // undefined
```

<br />

이전 논리 연산자 &&를 사용한 단축 평가

```javascript
// elem이 Falsy 값이면 elem으로 평가되고 elem이 Truthy 값이면 elem.value로 평가된다.
var value = elem && elem.value;
console.log(value); // null
```

<br />

논리연산자(&&)는 좌항 피연산자가 false이면 좌항 피연산자가 그대로 반환.

```javascript
var str = "";

// 문자열의 길이(length)를 참조한다.
var length = str && str.length;

// 문자열의 길이(length)를 참조하지 못한다.
console.log(length); // ''
```

<br />

하지만 옵셔널 체이닝은 좌항 피연산자가 false이라도 null 또는 undefined가 아니면 우항의 프로퍼티 참조를 이어 간다.

```javascript
var str = "";

// 문자열의 길이(length)를 참조한다. 이때 좌항 피연산자가 false로 평가되는 Falsy 값이라도
// null 또는 undefined가 아니면 우항의 프로퍼티 참조를 이어간다.
var length = str?.length;
console.log(length); // 0
```

<br />

### null 병합 연산자

<br />

null 병합 연산자(??)는 변수에 기본값을 설정할 때 유용

```javascript
// 좌항의 피연산자가 null 또는 undefined이면 우항의 피연산자를 반환하고, 그렇지 않으면 좌항의 피연산자를 반환한다.
var foo = null ?? "default string";
console.log(foo); // "default string"
```

<br />

이전 논리 연산자 ||를 사용한 단축 평가

```javascript
// Falsy 값인 0이나 ''도 기본값으로서 유효하다면 예기치 않은 동작이 발생할 수 있다.
var foo = "" || "default string";
console.log(foo); // "default string"
```

<br />

false로 평가 되지만, null 또는 undefined가 아닐 경우 좌항의 피연산자를 그대로 반환

```javascript
// 좌항의 피연산자가 Falsy 값이라도 null 또는 undefined이 아니면 좌항의 피연산자를 반환한다.
var foo = "" ?? "default string";
console.log(foo); // ""
```
