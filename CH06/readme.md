# 06. 데이터 타입

|   구분    | 데이터 타입          | 설명                                                |
| :-------: | :------------------- | :-------------------------------------------------- |
| 원시타입  | 숫자(number) 타입    | 숫자, 정수와 실수 구분 없이 하나의 숫자 타입만 존재 |
|           | 문자열(string) 타입  | 문자열                                              |
|           | 불리언(boolean) 타입 | 논리적 참(true)와 거짓(false)                       |
|           | undefined 타입       | Var 키워드로 선언된 변수에 암묵적으로 할당되는 값   |
|           | null 타입            | 값이 없다는 것을 의도적으로 명시할때 사용하는 값    |
|           | 심벌(symbol) 타입    | ES6에서 추가된 7번째 타입                           |
| 객체 타입 |                      | 객체, 함수, 배열 등                                 |

<br />

## number 타입

ECMAScript에 의하면 숫자타입은 배정밀도 64비트 부동소수점 형식, 즉 숫자는 모두 실수로 처리한다.

```javascript
var integer = 10; //정수
var double = 10.22; //실수
var negative = -20; //음의 정수

var binary = 0b01000001; // 2진수
var octal = 0o101; // 8진수
var hex = 0x41; // 16진수
```

```javascript
// 표기법만 다를 뿐 모두 같은 값이다.
console.log(binary); // 65
console.log(octal); // 65
console.log(hex); // 65
console.log(binary === octal); // true
console.log(octal === hex); // true
```

```javascript
// 숫자 타입의 세 가지 특별한 값
console.log(10 / 0); // Infinity
console.log(10 / -0); // -Infinity
console.log(1 * "String"); // NaN
```

```javascript
// 자바스크립트는 대소문자를 구별한다.
var x = nan; // ReferenceError: nan is not defined
var x = NaN; // NaN
```

<br />

## string 타입

문자열은 0개 이상의 16비트 유니코드 문자의 집합으로 전 세계 대부분의 문자를 표현할 수 있다.

```javascript
// 문자열 타입
var string;
string = "문자열"; // 작은따옴표
string = "문자열"; // 큰따옴표
string = `문자열`; // 백틱 (ES6)
string = '작은따옴표로 감싼 문자열 내의 "큰따옴표"는 문자열로 인식된다.';
string = "큰따옴표로 감싼 문자열 내의 '작은따옴표'는 문자열로 인식된다.";
```

만일 문자열에 따옴표나 백틱을 감싸지 않으면 키워드나 식별자로 인식한다.

```javascript
// 따옴표로 감싸지 않은 hello를 식별자로 인식한다.
var string = hello; // ReferenceError: hello is not defined
var string = "hello"; // hello 출력
```

<br />

## 템플릿 리터럴

- 백틱(``)을 사용하여 문자열을 표시
- 문자열 안에 변수사용이 가능

```javascript
var template = `Template literal`;
console.log(template); // Template literal
```

일반 문자열은 줄바꿈이 허용하지 않지만 리터럴은 가능하다. <br />
일반 문자열을 줄바꿈하려면 [이스케이프 시퀀스](https://mathiasbynens.be/notes/javascript-escapes)를 사용해야 한다.

```javascript
var str = 'Hello
world.';
// SyntaxError: Invalid or unexpected token
```

```javascript
var template = '<ul>\n\t<li><a href="#">Home</a></li>\n</ul>'; // 일반 문자열로 표시
var template = `<ul> 
  <li><a href="#">Home</a></li>
</ul>`; //리터럴로 표시

console.log(template);
```

일반 문자열에서 변수를 추가하려면 +로 삽입하여 표현하지만, 리터럴은 ${}(템플릿 리터럴)로 간단하게 표기할 수 있다.

```javascript
var first = "HK";
var last = "L";

console.log("My name is " + last + " " + first); // 일반 문자열로 표시할 때
console.log(`My name is ${last} ${first}`); //리터럴로 표시할 때
```

```javascript
console.log("1 + 2 = ${1 + 2}");
// 1 + 2 = ${1 + 2} 백틱이 아닌 따옴표로 표기하면 템플릿 리터럴은 문자열로 표시된다.
```

  <br />

## boolean 타입

boolean 값은 true, false

```javascript
var foo = true;
console.log(foo); //true
foo = false;
console.log(foo); //false
```

<br />

## undefined 타입

```javascript
var foo;
console.log(foo); // undefined
```

var 변수는 암묵적으로 undefined로 초기화, 변수를 선언 후 값을 할당하지 않을 때 undefined가 반환
js 엔진이 변수를 초기화 할때 사용하는 값
<br />

## null 타입

대소문자 구별하므로 null만 허용
변수가 이전에 참조하던 값을 더 이상 참조하지 않겠다는 의미

```javascript
var foo = "Lee";

// 이전에 할당되어 있던 값에 대한 참조를 제거. foo 변수는 더 이상 'Lee'를 참조하지 않는다.
// 유용해 보이지는 않는다. 변수의 스코프를 좁게 만들어 변수 자체를 재빨리 소멸시키는 편이 낫다.
foo = null;
```

```javascript
<!DOCTYPE html>
<html>
<body>
  <script>
    var element = document.querySelector('.myClass');

    // HTML 문서에 myClass 클래스를 갖는 요소가 없다면 null을 반환한다.
    console.log(element); // null
  </script>
</body>
</html>

```

<br />

## symbol 타입

변경 불가능한 원시 타입의 값, 유일무이한 값, <br />
주로 이름이 충돌할 위험이 없는 객체의 유일한 프로퍼티 키를 만들기 위해 사용

```javascript
// 심벌 값 생성
var key = Symbol("key");
console.log(typeof key); // symbol

// 객체 생성
var obj = {};

// 이름이 충돌할 위험이 없는 유일무이한 값인 심벌을 프로퍼티 키로 사용한다.
obj[key] = "value";
console.log(obj[key]); // value
```

<br />

## 객체 타입

원시 타입을 제외하고 모든 것이 객체이다. 챕터 11참조

<br />

## 데이터 타입의 필요성

- 메모리 공간(값의 종류에 따라 정해진 크기에 메모리 공간 확보)
- 값을 참조(변수에 값에 대한 타입이 할당되어서 자바스크립트 엔진은 그 변수의 값 타입을 확인하고 타입 단위만큼 한번에 참조한다. <br />
  number 타입은 8바이트로 저장되어 있어서 number 타입을 참조할 경우 8바이트 단위로 저장된 값을 읽음)
- 값의 해석(메모리에서 2진수를 타입에 따라 다르게 해석, 만일 숫자 타입이면 65, 문자열 타입이면 'A')
- <br />

## 동적 타이핑

- 자바스크립트의 변수는 선언이 아닌 할당에 의해 타입이 결정된다(타입 추론 type interface). <br />
- 재할당에 의해 변수 타입은 언제든지 동적으로 변할 수 있다. 이러한 특징을 동적 타이핑(dynamic typing)이라 하며,
  동적 타입 언어라고도 한다. <br >
- 변수는 타입을 갖지 못하고, 값에 의해 변수의 타입이 동적으로 결정

```javascript
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
```
