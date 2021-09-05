## 함수란?

수학의 함수는 입력과 출력의 일련의 과정, 프로그래밍 언어도 같은 개념 <br />
입력을 전달 받는 변수를 **매개변수(parameter)**, <br />
입력을 **인수(argument)** <br />
출력을 **반환값(return value)**

```javascript
//함수 정의
function add(x, y) {
  //x, y는 매개변수
  return x + y; //x + y는 반환값
}
add(2, 5); //2, 5는 인수
```

함수 호출 : 인수를 매개변수를 통해 함수에 전달하면서 함수의 실행을 명시적으로 지시

## 함수를 사용하는 이유는?

코드 중복을 최소화하고 정의된 함수를 재사용하므로써 유지보수의 편의성과 코드의 신뢰성을 높임
또한 가독성도 높아져서 다른 사람이 이해하기 쉬워진다.

## 함수 리터릴

JS에서 함수는 객체 타입. <br />

리터럴이란? 소스코드의 고정된 값

```javascript
const a = 1; //a는 상수 이고 1은 리터럴
```

### 함수 리터럴 구성 요소

|   구성 요소   | 설명                                                                                                                                                                                                                                                                                                       |
| :-----------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   함수 이름   | - 함수 이름은 식별자다. 따라서 식별자 네이밍 규칙을 준수해야 한다.<br>- 함수 이름은 함수 몸체 내에서만 참조할 수 있는 식별자다.<br>- 함수 이름은 생략할 수 있다. 이름이 있는 함수를 기명 함수, 이름이 없는 함수를 무명/익명 함수라 한다.                                                                   |
| 매개변수 목록 | - 0개 이상의 매개변수를 소괄호로 감싸고 쉼표로 구분한다.<br>- 각 매개변수에는 함수를 호출할 때 지정한 인수가 순서대로 할당된다. 즉, 매개변수 목록은 순서에 의미가 있다.<br>- 매개변수는 함수 몸체 내에서 변수와 동일하게 취급된다. 따라서 매개변수도 변수와 마찬가지로 식별자 네이밍 규칙을 준수해야 한다. |
|   함수 몸체   | - 함수가 호출되었을 때 일괄적으로 실행될 문들을 하나의 실행 단위로 정의한 코드 블록이다.<br>- 함수 몸체는 함수 호출에 의해 실행된다.                                                                                                                                                                       |

일반 객체는 호출할 수 없지만 함수는 호출이 가능

## 함수 정의

함수 선언문

```javascript
function add(x, y) {
  return x + y;
}
```

함수 표현식

```javascript
var add = function (x, y) {
  return x + y;
};
```

Function 생성자 함수

```javascript
var add = new Function("x", "y", "return x + y");
```

화살표 함수(ES6)

```javascript
var add = (x, y) => x + y;
```

변수는 선언, 함수는 정의라 명명함.

### 함수 선언문

```javascript
//함수 선언문
function add(x, y) {
  return x + y;
}
//함수 호출
console.log(add(2, 5));
```

함수 선언문은 표현식이 아닌 문이다. 그래서 변수에 할당 할 수 없다.
함수 선언문은 함수 이름을 생략할 수 없다.

```javascript
function (x, y){
  return x + y;
} undefined 출력
//SyntaxError: Function statements requires a function name
```

자바스크립트 엔진은 생성된 함수를 호출하기 위해 함수 이름과 동일한 이름의 식별자를 암묵적으로 생성하고, 거기에 함수 객체를 할당, 함수는 함수 이름으로 호출하는 것이 아니라 함수 객체를 가리키는 식별자로 호출한다.

```javascript
var add = function add(x, y) {
  //식별자         함수이름
  return x + y;
};
console.log(add(2, 5));
//          식별자
```

### 함수 표현식

값의 성질을 갖는 객체를 일급객체, 자바스크립트 함수는 일급 객체

### 함수 생성 시점과 함수 호이스팅

- 함수 선언문(var형태)이 코드의 선두로 끌어 올려진 것처럼 동작하는 자바 스크립트 고유의 특징을 함수 호이스팅 이라 한다.
- var 키워드를 사용한 함수 선언문으로 정의한 함수를 함수 선언문 이전에 호출하면 함수 호이스팅에 의해 호출 가능

```javascript
//함수 참조
console.dir(add); // add(x, y)
console.dir(sub); // undefined

//함수 호출
console.log(add(2, 5)); //7
console.log(sub(2, 5)); // TypeError: sub is not a function

//함수 선언문
function add(x, y) {
  return x + y;
}
//함수 표현식
var sub = function (x, y) {
  return x - y;
};
```

- 변수 할당문의 값은 할당문이 실행되는 시점, 즉 런타임에 평가되므로 함수 표현식ㄹ의 함수 리터럴로 할당문이 실행되는 시점에 평가되어 함수 객체가 됨
- 함수 표현식으로 함수를 정의하면 함수 호이스팅이 발생하는 것이 아니라 변수 호이스팅이 발생