# 10. 객체 리터럴

## 객체란?

- 다양한 타입의 값을 하나의 단위로 구성한 복합적인 자료구조
- 원시타입의 값은 변경이 불가능하지만 객체 타입의 값, 즉 객체는 변경 가능한 값이다.
- 객체는 0개 이상의 프로퍼티로 구성된 집합이며, 프로퍼티는 키와 값으로 구성된다.
- ```javascript
  var person = {
    name: "Lee", // => 프로퍼티
    age: 20, // => 프로퍼티
    //name과 age는 프로퍼티 키
    // "Lee", 20은 프로퍼티 값
  };
  ```
- 함수도 프로퍼티 값으로 사용가능하며, 프로퍼티 값이 함수일 경우 일반 함수와 구분하기 위해 메서드라 부름

<br />

## 객체 리터럴에 의한 객체 생성

프로토타입 기반 객체지향 언어

객체 생성 방법 종류

- 객체 리터럴 (일반적이고 간단한 방법)
- object 생성자 함수
- 생성자 함수
- Object.create 메서드
- 클래스(ES6)

객체 리터럴은 중괄호{}내에 0개 이상의 프로퍼티를 정의

```javascript
var person = {
  name: "Lee",
  sayHello: function () {
    console.log(`Hello! My name is ${this.name}.`);
  },
};

console.log(typeof person); // object
console.log(person); // {name: "Lee", sayHello: ƒ}
```

빈 객체 선언

```javascript
var empty = {}; // 빈 객체
console.log(typeof empty); // object
```

객체 리터럴은 값으로 평가되는 표현식이라 중괄호 뒤에 세미콜론을 붙임, 함수는 안붙임

<br />

## 프로퍼티

객체는 프로퍼티의 집합이며, 프로퍼티는 키와 값으로 구성된다.

```javascript
var person = {
  // 프로퍼티 키는 name, 프로퍼티 값은 'Lee'
  name: "Lee",
  // 프로퍼티 키는 age, 프로퍼티 값은 20
  age: 20,
};
```

프로퍼티 나열할때 쉼표로 구분 <br />
프로퍼티 키는 빈 문자열을 포함하는 모든 문자열 또는 심벌값이고 <br />
프로퍼티 값은 자바스크립트에서 사용할 수 있는 보든 값 <br />
<br />

식별자 네이밍 규칙을 사용 유무

```javascript
var person = {
  firstName: "Ung-mo", // 식별자 네이밍 규칙을 준수하는 프로퍼티 키
  "last-name": "Lee", // 식별자 네이밍 규칙을 준수하지 않는 프로퍼티 키
};

console.log(person); // {firstName: "Ung-mo", last-name: "Lee"}
```

<br />

따옴표를 생략한 객체 프로퍼티 키가 -연산자가 있을경우 -연산자가 있는 표현식으로 해석함

```javascript
var person = {
  firstName: 'Ung-mo',
  last-name: 'Lee' // SyntaxError: Unexpected token -
};
```

<br />

문자열을 이용하여 표현식을 사용해 프로퍼티 값을 동적으로 생성할 수 있음. 표현식 안에 대괄호[ ]로 묶어야 함

```javascript
var obj = {};
var key = "hello";

// ES5: 프로퍼티 키 동적 생성
obj[key] = "world";
// ES6: 계산된 프로퍼티 이름
// var obj = { [key]: 'world' };

console.log(obj); // {hello: "world"}
```

<br />

빈 문자열을 프로퍼티 키로 사용할 경우

```javascript
var foo = {
  "": "", // 빈 문자열도 프로퍼티 키로 사용할 수 있다.
};

console.log(foo); // {"": ""}
```

<br />

프로퍼티 키를 중복 사용할 경우

```javascript
var foo = {
  name: "Lee",
  name: "Kim",
};

console.log(foo); // {name: "Kim"}
```

<br />

## 메서드

메서드는 객체에 묶여 있는 함수를 의미

```javascript
var circle = {
  radius: 5, // ← 프로퍼티

  // 원의 지름
  getDiameter: function () {
    // ← 메서드
    return 2 * this.radius; // this는 circle을 가리킨다.
  },
};

console.log(circle.getDiameter()); // 10
```

<br />

## 프로퍼티 접근

객체 접근 방법

- .으로 사용하는 마침표 표기법
- 대괄호 프로퍼티 접근 연사자[...]를 사용하는 대괄호 표기법

```javascript
var person = {
  name: "Lee",
};

// 마침표 표기법에 의한 프로퍼티 접근
console.log(person.name); // Lee

// 대괄호 표기법에 의한 프로퍼티 접근
// 대괄호 프로퍼티 접근 연산자 내부에 지정하는 프로퍼티 키는 반드시 따옴표로 감싼 문자열이어야 함
// 따옴표로 감싸지 않으면 자바스크립트는 식별자로 해석함
console.log(person["name"]); // Lee
console.log(person[name]); // ReferenceError: name is not defined
```

<br />

person객체에 없는 프로퍼티 키를 선언할 경우 undefined로 반환, ReferenceError이 일어나지 않음

```javascript
var person = {
  name: "Lee",
};

console.log(person.age); // undefined
```

<br />

문자열을 프로퍼티 키로 선언할때 나타나는 현상

```javascript
var person = {
'last-name': 'Lee',
1: 10
};

person.'last-name'; // -> SyntaxError: Unexpected string
person.last-name; // -> 브라우저 환경: NaN
// -> Node.js 환경: ReferenceError: name is not defined
person[last-name]; // -> ReferenceError: last is not defined
person['last-name']; // -> Lee

// 프로퍼티 키가 숫자로 이뤄진 문자열인 경우 따옴표를 생략할 수 있다.
person.1; // -> SyntaxError: Unexpected number
person.'1'; // -> SyntaxError: Unexpected string
person[1]; // -> 10 : person[1] -> person['1']
person['1']; // -> 10
```

  <br />

## 프로퍼티 값 갱신

```javascript
var person = {
  name: "Lee",
};

// person 객체에 name 프로퍼티가 존재하므로 name 프로퍼티의 값이 갱신된다.
person.name = "Kim";

console.log(person); // {name: "Kim"}
```

<br />

## 프로퍼티 동적 생성

```javascript
var person = {
  name: "Lee",
};

// person 객체에는 age 프로퍼티가 존재하지 않는다.
// 따라서 person 객체에 age 프로퍼티가 동적으로 생성되고 값이 할당된다.
person.age = 20;

console.log(person); // {name: "Lee", age: 20}
```

<br />

## 프로퍼티 삭제

```javascript
var person = {
  name: "Lee",
};

// 프로퍼티 동적 생성
person.age = 20;

// person 객체에 age 프로퍼티가 존재한다.
// 따라서 delete 연산자로 age 프로퍼티를 삭제할 수 있다.
delete person.age;

// person 객체에 address 프로퍼티가 존재하지 않는다.
// 따라서 delete 연산자로 address 프로퍼티를 삭제할 수 없다. 이때 에러가 발생하지 않는다.
delete person.address;

console.log(person); // {name: "Lee"}
```

<br />

## ES6에서 추가된 객체 리터럴의 확장 기능

### 프로퍼티 축약 표현

```javascript
// ES5

var x = 1,
  y = 2;

var obj = {
  x: x,
  y: y,
};

console.log(obj); // {x: 1, y: 2}

// ES6
let x = 1;
let y = 2;

// 프로퍼티 축약 표현
// 프로퍼티 값으로 변수를 사용하는 경우 변수 이름과 프로퍼티 키가 동일한 이름일 때 프로퍼티 키를 생략 할 수 있음.
const obj = { x, y };

console.log(obj); // {x: 1, y: 2}
```

### 계산된 프로퍼티 이름

문자열 또는 문자열로 타입 변환할 수 있는 값으로 평가되는 표현식을 사용해 프로퍼티 키를 동적으로 생성할 수 있음 <br />
단, 프로퍼티 키로 사용할 표현식을 대괄호[ ]로 묶어야 한다. <br />
이를 계산된 프로퍼티 이름이라 한다.(computer property name)

```javascript
// ES5
var prefix = "prop";
var i = 0;

var obj = {};

// 계산된 프로퍼티 이름으로 프로퍼티 키 동적 생성
obj[prefix + "-" + ++i] = i;
obj[prefix + "-" + ++i] = i;
obj[prefix + "-" + ++i] = i;

console.log(obj); // {prop-1: 1, prop-2: 2, prop-3: 3}
```

ES6에서 객체 리터럴 내부에서도 계산된 프로퍼티 이름으로 프로퍼티 키를 동적 생성할 수 있음

```javascript
// ES6
const prefix = "prop";
let i = 0;

// 객체 리터럴 내부에서 계산된 프로퍼티 이름으로 프로퍼티 키 동적 생성
const obj = {
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i,
};

console.log(obj); // {prop-1: 1, prop-2: 2, prop-3: 3}
```

### 메서드 축약 표현

메서드를 정의하려면 프로퍼티 값으로 함수 할당 할 수 있음

```javascript
// ES5
var obj = {
  name: "Lee",
  sayHi: function () {
    console.log("Hi! " + this.name);
  },
};

obj.sayHi(); // Hi! Lee
```

function 키워드를 생략한 축약 표현

```javascript
// ES6
const obj = {
  name: "Lee",
  // 메서드 축약 표현
  sayHi() {
    console.log("Hi! " + this.name);
  },
};

obj.sayHi(); // Hi! Lee
```

<br />
