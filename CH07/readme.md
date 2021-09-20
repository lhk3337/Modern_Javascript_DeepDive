# 07. 연산자

피연산자는 연산의 대상이 되어야 하므로 값으로 평가할 수 있어야 한다. 연산자는 값으로 평가된 피연사자를 연사자를 연산해 새로운 값을 만든다.

```javascript
// 산술 연산자
5 \* 4 // -> 20
// 문자열 연결 연산자
'My name is ' + 'Lee' // -> 'My name is Lee'
// 할당 연산자
color = 'red' // -> 'red'
// 비교 연산자
3 > 5 // -> false
// 논리 연산자
true && false // -> false
// 타입 연산자
typeof 'Hi' // -> string

```

## 산술 연산자

피연산자의 대상으로 수학적 계산을 수행해 새로운 숫자 값을 만듦. 계산을 못할 경우 NaN으로 리턴한다. <br />
이항 연산자(+, -, \*, /, %)는 2개의 피연산자를 산술 연산하여 숫자 값을 만든다. 부수 효과(어떤 산술연산을 해도 피연산자의 값이 바뀌지 않음)가 없음. <br />

```javascript
5 + 2; // -> 7
5 - 2; // -> 3
5 * 2; // -> 10
5 / 2; // -> 2.5
5 % 2; // -> 1
```

단항 산술 연산자는 1개의 피연산자를 산술 연산하여 숫자 값을 만듦
++, --는 부수 효과가 발생한다.

```javascript
var x = 1;

// ++ 연산자는 피연산자의 값을 변경하는 암묵적 할당이 이뤄진다.
x++; // x = x + 1;
console.log(x); // 2

// -- 연산자는 피연산자의 값을 변경하는 암묵적 할당이 이뤄진다.
x--; // x = x - 1;
console.log(x); // 1
```

증가/감소(++/--)연산자 위치에 따라 값이 달라짐

```javascript
var x = 5,
  result;

// 선할당 후증가(postfix increment operator)
result = x++;
console.log(result, x); // 5 6

// 선증가 후할당(prefix increment operator)
result = ++x;
console.log(result, x); // 7 7

// 선할당 후감소(postfix decrement operator)
result = x--;
console.log(result, x); // 7 6

// 선감소 후할당 (prefix decrement operator)
result = --x;
console.log(result, x); // 5 5
```

문자열 연결 연산자

+연산자는 피연산자중 하나 이상이 문자열인 경우 문자열 연결 연산자로 작동

```javascript
// 문자열 연결 연산자
"1" + 2; // -> '12'
1 + "2"; // -> '12'

// 산술 연산자
1 + 2; // -> 3

// true는 1로 타입 변환된다.
1 + true; // -> 2

// false는 0으로 타입 변환된다.
1 + false; // -> 1

// null은 0으로 타입 변환된다.
1 + null; // -> 1

// undefined는 숫자로 타입 변환되지 않는다.
+undefined; // -> NaN
1 + undefined; // -> NaN
```

1 + true를 연산하면 js는 true를 암묵적으로 1로 리턴함. 1 + 1 = 2로 반환
<br />

## 할당 연산자

=, +=, -=, \*=, /=, %=, 부수 효과가 발생

```javascript
var x;

x = 10;
console.log(x); // 10

x += 5; // x = x + 5;
console.log(x); // 15

x -= 5; // x = x - 5;
console.log(x); // 10

x *= 5; // x = x * 5;
console.log(x); // 50

x /= 5; // x = x / 5;
console.log(x); // 10

x %= 5; // x = x % 5;
console.log(x); // 0

var str = "My name is ";

// 문자열 연결 연산자
str += "Lee"; // str = str + 'Lee';
console.log(str); // 'My name is Lee'
```

할당문은 값으로 평가되는 표현식인 문으로서 할당된 값으로 평가된다. <br />

```javascript
var x;
// 할당문은 표현식인 문이다.
console.log((x = 10)); // 10
```

연쇄할당

```javascript
var a, b, c;

// 연쇄 할당. 오른쪽에서 왼쪽으로 진행.
// ① c = 0 : 0으로 평가된다
// ② b = 0 : 0으로 평가된다
// ③ a = 0 : 0으로 평가된다
a = b = c = 0;

console.log(a, b, c); // 0 0 0
```

<br />

## 비교 연산자

| 비교 연산자 |    의미     |  사례   | 설명                     | 부수 효과 |
| :---------: | :---------: | :-----: | ------------------------ | :-------: |
|     ==      |  동등 비교  | x == y  | x와 y의 값이 같음        |     X     |
|     ===     |  일치 비교  | x === y | x와 y의 값과 타입이 같음 |     X     |
|     ! =     | 부동등 비교 | x != y  | x와 y의 값이 다름        |     X     |
|    ! ==     | 불일치 비교 | x !== y | x와 y의 값과 타입이 다름 |     X     |

```javascript
// 동등 비교
5 == 5; // -> true

// 타입은 다르지만 암묵적 타입 변환을 통해 타입을 일치시키면 동등하다.
5 == "5"; // -> true
```

동등비교(==)연산자는 좌항과 우항의 피연사자를 비교할 때 먼저 암묵적 타입 변환을 통해 타입을 일치시킨 후 같은 값인지 비교.

```javascript
// 동등 비교. 결과를 예측하기 어렵다.
"0" == ""; // -> false
0 == ""; // -> true
0 == "0"; // -> true
false == "false"; // -> false
false == "0"; // -> true
false == null; // -> false
false == undefined; // -> false
```

일치비교(===) 연산자는 좌항과 우항의 피연사자가 타입도 같고 값도 같은 경우에 한하여 true를 변환

```javascript
// 일치 비교
5 === 5; // -> true

// 암묵적 타입 변환을 하지 않고 값을 비교한다.
// 즉, 값과 타입이 모두 같은 경우만 true를 반환한다.
5 === "5"; // -> false
```

NaN

```javascript
// NaN은 자신과 일치하지 않는 유일한 값이다.
NaN === NaN; // -> false
```

NaN은 자신과 일치하지 않는 유일한 값, 숫자가 NaN인지 조사하려면 빌트인 함수 isNaN을 사용한다.

```javascript
// isNaN 함수는 지정한 값이 NaN인지 확인하고 그 결과를 불리언 값으로 반환한다.
isNaN(NaN); // -> true
isNaN(10); // -> false
isNaN(1 + undefined); // -> true
```

숫자 0은 양의 0과 음의 0이 있음

```javascript
0 === -0; // -> true
0 == -0; // -> true

-0 === +0; // -> true
Object.is(-0, +0); // -> false

NaN === NaN; // -> false
Object.is(NaN, NaN); // -> true
```

```javascript
// 부동등 비교, 동등 비교(==)의 반대
5 != 8; // -> true
5 != 5; // -> false
5 != "5"; // -> false

// 불일치 비교, 일치 비교(===)의 반대
5 !== 8; // -> true
5 !== 5; // -> false
5 !== "5"; // -> true
```

대소 관계 비교
| 대소 관계 비교 연산자 | 예제 | 설명 | 부수 효과 |
| :-------------------: | :----: | --------------------- | :-------: |
| > | x > y | x가 y보다 크다 | X |
| < | x < y | x가 y보다 작다 | X |
| >= | x >= y | x가 y보다 크거나 같다 | X |
| <= | x <= y | x가 y보다 작거나 같다 | X |

```javascript
// 대소 관계 비교
5 > 0; // -> true
5 > 5; // -> false
5 >= 5; // -> true
5 <= 5; // -> true
```

<br />

## 삼항 조건 연산자

조건식 ? 조건식이 true일때 반환 값 : 조건식이 false일떄 반환 값 <br />
삼항 조건 연산자 표현식은 값으로 평가할 수 있는 표현식인 문
조건에 따라 수행해야 할 문이 하나일 경우 삼항 연산자를 사용하고 많을 경우 if...else문으로 사용하는 것이 가독성면에서 좋다.

```javascript
var x = 2;

// 2 % 2는 0이고 0은 false로 암묵적 타입 변환된다.
var result = x % 2 ? "홀수" : "짝수";

console.log(result); // 짝수
```

```javascript
var x = 10;

// if...else 문은 표현식이 아닌 문이다. 따라서 값처럼 사용할 수 없다.
var result = if (x % 2) { result = '홀수'; } else { result = '짝수'; };
// SyntaxError: Unexpected token if
```

<br />

## 논리 연산자

```javascript
// 논리합(||) 연산자
true || true; // -> true
true || false; // -> true
false || true; // -> true
false || false; // -> false

// 논리곱(&&) 연산자
true && true; // -> true
true && false; // -> false
false && true; // -> false
false && false; // -> false

// 논리 부정(!) 연산자
!true; // -> false
!false; // -> true
```

```javascript
// 암묵적 타입 변환
!0; // -> true
!"Hello"; // -> false
```

<br />

## 쉼표 연산자

```javascript
var x, y, z;

(x = 1), (y = 2), (z = 3); // 3
```

<br />

## 그룹 연산자

소괄호를 이용하여 연산자의 우선순위를 조절

```javascript
10 * 2 + 3; // -> 23

// 그룹 연산자를 사용하여 우선순위를 조절
10 * (2 + 3); // -> 50
```

<br />

## typeof 연산자

데이터의 타입을 문자열로 변환

```javascript
typeof ""; // -> "string"
typeof 1; // -> "number"
typeof NaN; // -> "number"
typeof true; // -> "boolean"
typeof undefined; // -> "undefined"
typeof Symbol(); // -> "symbol"
typeof null; // -> "object",
typeof []; // -> "object"
typeof {}; // -> "object"
typeof new Date(); // -> "object"
typeof /test/gi; // -> "object"
typeof function () {}; // -> "function"
```

```javascript
var foo = null;

typeof foo === null; // -> false, typeof foo-> object, 로 리턴되어 null과 비교하면 false 반환
foo === null; // -> true
```

```javascript
// undeclared 식별자를 선언한 적이 없다.
typeof undeclared; // -> undefined
```

<br />

## 지수 연산자

ES7에 도입되어 지수로 거듭 제곱하여 숫자 값을 반환 (\*\*)

```javascript
2 ** 2; // -> 4
2 ** 2.5; // -> 5.65685424949238
2 ** 0; // -> 1
2 ** -2; // -> 0.25
```

Math.pow 메서드

```javascript
Math.pow(2, 2); // -> 4
Math.pow(2, 2.5); // -> 5.65685424949238
Math.pow(2, 0); // -> 1
Math.pow(2, -2); // -> 0.25
```

지수연산자와 Math.pow 메서드와 비교

```javascript
2 ** (2 ** 2); // -> 16
Math.pow(Math.pow(2, 2), 2); // -> 16
```

음수의 거듭 제곱은 소괄호를 붙여 연산해야 한다.

```javascript
-5 ** 2;
// SyntaxError: Unary operator used immediately before exponentiation expression.
// Parenthesis must be used to disambiguate operator precedence

(-5) ** 2; // -> 25
```

```javascript
var num = 5;
num **= 2; // -> 25, 할당 연산자와 같이 사용 가능

2 * 5 ** 2; // -> 50, 이항 연산자 중 우선순위가 가장 높음
```

<br />

## 그 외의 연산자

| 연산자     | 개요                                                        |
| ---------- | ----------------------------------------------------------- |
| ?.         | 옵셔널 체이닝 연산자                                        |
| ??         | null 병합 연산자                                            |
| delete     | 프로퍼티 삭제                                               |
| new        | 생성자 함수를 호출할 때 사용하여 인스턴스를 생성            |
| instanceof | 좌변의 객체가 우변의 생성자 함수와 연결된 인스턴스인지 판별 |
| in         | 프로퍼티 존재 확인                                          |

<br />

## 연산자의 부수 효과 (side effect)

연산자는 연산할때 다른 코드에 영향을 주지 않고 새로운 값을 반환하지만 <br />
일부 연산자는 다른 코드에 영향을 주는 부수 효과 (side effect)가 있다. <br />
종류 : 할당 연산자(=), 증가/감소 연산자(++/--), delete 연산자

```javascript
var x;

// 할당 연산자는 변수 값이 변하는 부수 효과가 있다.
// 이는 x 변수를 사용하는 다른 코드에 영향을 준다.
x = 1;
console.log(x); // 1

// 증가/감소 연산자(++/--)는 피연산자의 값을 변경하는 부수 효과가 있다.
// 피연산자 x의 값이 재할당되어 변경된다. 이는 x 변수를 사용하는 다른 코드에 영향을 준다.
x++;
console.log(x); // 2

var o = { a: 1 };

// delete 연산자는 객체의 프로퍼티를 삭제하는 부수 효과가 있다.
// 이는 o 객체를 사용하는 다른 코드에 영향을 준다.
delete o.a;
console.log(o); // {}
```

<br />

## 연산자 우선 순위

여러 개의 연산자로 이루어진 문이 실행될 때 연산자가 실행되는 순서. <br />
[mdn 순서 참조](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

<br />

## 연산자 결합 순서

| 결합 순서     | 연산자                                                                                 |
| ------------- | -------------------------------------------------------------------------------------- |
| 좌항 --> 우황 | +, -, /, %, <, <=, >, >=, &&, \|\|, ., [ ], ( ), ??, ?., in, instance                  |
| 우황 --> 좌항 | ++, --, 할당 연산자(=, +=, -=, ...), !x, +x, -x, ++x, --x, typeof, delete, ? ... : ... |

<br />
