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
- 문자열 연결 연사자를 이용하는 방법

<br />

### 숫자 타입으로 변환

<br />

### boolean 타입으로 변환

<br />

## 단축 평가

<br />

```javascript

```
