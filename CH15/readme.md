# 15. let, consts 키워드와 블록 레벨 스코프

## var

<br />

### 변수 중복 선언 허용

```javascript
var x = 1;
var y = 1;
//같은 스코프 내에서 중복 선언 가능

var x = 100;
// 초기화문이 있는 변수는 선언문(변수 선언과 동시에 초기값을 할당하는 문)은
//자바스크립트 엔진에 의해 var 키워드가 없는 것처럼 동작

var y;
// 초기화문이 없는 변수 선언문은 무시된다.

console.log(x); //x의 값 1이 100으로 변경 되어 부작용이 발생하였다.

console.log(y); //1
```

위와같이 동일한 이름의 변수가 이미 선언 되고, 나중에 다시 변수를 중복 선언을 할 경우 의도치 않게 변수 값이 변경되는 부작용 발생 <br />
<br /><br />

### 함수 레벨 스코프

<br />
var 변수는 함수의 코드 블록만을 지역 스코프로 인정하므로, 함수가 아닌 코드 블록내에서 선언하여도 모두 전역변수가 된다. <br />
전역 변수가 중복 선언되어 변수의 값이 변경되는 부작용 역시 발생한다.

```javascript
var x = 1;
if (true) {
  var x = 10; //if문은 함수가 아니므로 코드 블록안의 x변수는 지역변수가 아닌 전역변수가 된다.
}
console.log(x); //10

var i = 10;
for (var i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i); //5
```

<br />

### 변수 호이스팅

<br />
변수 호이스팅에 의해 변수 선언문이 스코프의 선두로 끌어 올려진 것처럼 동작, <br />
할당 이전에 변수를 참조하면 undefined발생 <br />
변수의 선언과 초기화가 같이 일어남 <br />

```javascript
console.log(foo);
// 이 시점에 변수 호이스팅에 의해 foo변수가 할당 1. 선언
// 변수 foo는 undefined로 초기화 2. 초기화 단계

foo = 123;
//변수에 값 할당 3. 할당 단계

console.log(foo); //123

var foo;
// 변수 선언은 런타임 이전에 자바스크립트 엔진에 의해 암묵적으로 실행
```

<br />

## let

<br />

### 변수 중복 선언 금지 - 에러 발생 시킴

```javascript
var foo = 123;
var foo = 456; //변수 중복, 재할당

let bar = 123;
let bar = 456; // 에러발생 SyntaxError: Identifier 'bar' has already been declared

//같은 스코프 내에서 중복 선언을 허용하지 않음
```

<br />

### 블록 레벨 스코프

<br />
var는 함수만 지역변수로 인정되고, let은 모든 블록(함수, if문, for문, while문, try/catch문)에 지역변수로 인정

```javascript
let foo = 1; //전역 변수

{
  let foo = 2; //지역 변수
  let bar = 3; //지역 변수
  console.log(foo); //2
}
console.log(foo); //1
console.log(bar); // ReferenceError: bar is not defined
// 지역변수 bar를 참조 할 수 없다.
```

```javascript
let i = 10;
//------------------------------- 전역 스코프

function foo() {
  let i = 100;
  //------------------------------- 함수 레벨 스코프

  for (let i = 1; i < 3; i++) {
    console.log(i); //1 2
    //------------------------------- 블록 레벨 스코프
  }

  console.log(i); //100
}

foo();

console.log(i); //10
```

<br />

### 변수 호이스팅

<br />
변수 호이스팅이 발생하지 않는 것처럼 동작한다.

```javascript
console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
let foo;
//
```

var로 선언한 변수는 자바스크립트 엔진에 의해 암묵적으로 선언단계와 초기화 단계가 한번에 진행된다.

let으로 선언한 함수는 선언단계와 초기화 단계가 분리되어 진행

|       선언단계       |
| :------------------: |
| 일시적 사각지대(TDZ) |
|     초기와 단계      |
|      할당 단계       |

```javascript
console.log(foo); //ReferenceError: foo is not defined
// 런타임 이전에 선언 단계가 실행된다. 아직 변수가 초기화 되지 않았다.
// 초기화 이전의 일시적 사각지대에서는 변수를 참조할 수 없다.

let foo; //변수 선언문에서 초기화 단계가 실행
console.log(foo); //undefined

foo = 1; // 할당문에서 할당 단계가 실행
console.log(foo); // 1
```

<br />

let의 호이스팅이 발생하는 경우

```javascript
let foo = 1; //전역 함수
{
  console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
  let foo = 2; // 지역 함수
}
```

let 변수로 선언할 경우 변수 호이스팅이 발생하지 않는다면 위 예제는 전역 변수 foo의 값을 출력해야 한다.
<br />
하지만 let 변수도 여전히 호이스팅이 발생하기 때문에 참조 에러가 발생한다.
<br />
<br />

## const

상수를 선언하기 위해 사용
<br />
<br />

### 선언과 초기화

<br />

**const로 선언한 변수는 선언과 동시에 초기화 해야 한다**

```javascript
const foo = 1;
```

그렇지 않으면 문법 에러 발생

```javascript
const foo; // SyntaxError: Missing initializer in const declaration
```

let과 같은 블록 레벨 스코프 가지며, 호이스팅이 발생하지 않는 것처럼 동작

```javascript
{
  console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
  const foo = 1;
  console.log(foo); // 1
}

console.log(foo); // // ReferenceError: foo is not defined
// 블록 레벨 스코프를 가짐
```

<br />

### 재할당 금지

```javascript
const foo = 1;
foo = 2; //TypeError : Assignment to constant variable.
```

### 상수

상수는 재할당이 금지된 변수, var나 let은 언제든지 재할당이 가능하지만 상수는 재할당이 금지된다.

```javascript
let preTaxPrice = 100;
let afterTaxPrice = preTaxPrice + preTaxPrice * 0.1;
//0.1이 무엇인지 알 수 없음(가독성 떨어짐)

console.log(afterTaxPrice); // 110
```

```javascript
const TAX_RATE = 0.1;
let preTaxPrice = 100;
let afterTaxPrice = preTaxPrice + preTaxPrice * TAX_RATE;
// 의미론적으로 무엇을 의미하는지 명확하게 표현

console.log(afterTaxPrice); // 110
```

<br />

## var vs. let vs. const

변수 선언에는 기본적으로 const를 사용하고, let은 재할당이 필요한 경우에 한정적으로 사용하는 것을 추천
const 사용으로 재할당을 방지하기 떄문에 안전하다. 가급적이면 var 사용은 사용하지 않는다.

[한번에 정리](https://backstreet-programmer.tistory.com/76)
