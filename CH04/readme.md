## 변수란 무엇인가?

변수는 하나의 값을 저장하기 위해 확보된 메모리 공간 자체, 그 메모리 공간을 식별하기 위해 붙인 이름

```javascript
//변수는 하나의 값을 저장
var userId = 1;
var userName = "Lee";

//객체나 배열은 여러 개의 값을 하나로 그룹화해서 하나의 값처럼 사용
var user = { id: 1, name: "Lee" };
var users = [
  { id: 1, name: "Lee" },
  { id: 2, name: "kim" },
];
```

<br />

```javascript
var result = 10 + 20;
```

10 + 20 연산으로 30이 생성되고, 생성된 30은 메모리 공간에 저장 <br />
이 값을 불러드릴 수 있도록 값이 저장된 메모리 공간에 상징적인 이름을 붙인 것이 변수

메모리에 저장된 값을 식별할 수 있는 고유한 이름을 **변수이름** (예 result) <br />
그 변수에 저장된 값을 **변수 값** (예 30) <br />
변수 값을 저장하는 것을 할당(assignment, 대입, 저장) <br />
변수에 저장값을 읽어 들이는 것을 참조(reference)

<br />

## 식별자

어떤 값을 구별해서 식별할 수 있는 고유한 이름 <br />

```
식별자는 값이 아니라 메모리 주소를 기억
```

```javascript
const result = 30;

result(변수 이름, 식별자) -> 0x06ffff(메모리 주소) -> 30 (메모리 안의 값)
```

식별자는 변수에만 사용하는 것이 아니라 함수, 클래스 등의 이름도 모두 식별자이다.

<br />

## 변수 선언

변수를 사용하려면 선언이 필요, 선언을 하려면 아래와 같은 키워드 사용

```javascript
var, let, const
```

변수에 값을 할당하지 않으면 메모리 공간에는 자바스크립트 엔진에 의해 undefined라는 값이 암묵적으로 할당되어 초기화 한다.

```javascript
var score; //값이 없으면 암묵적으로 undefined할당
```

<br />

## 변수 선언의 실행 시점과 변수 호이스팅

자바스크립트는 한줄씩 실행하는 인터프리터언어

```javascript
console.log(score); //undefined; 원래 다른언어이면 변수 선언되지 않아 참조 에러 발생
var score; //변수 선언문
```

변수 선언문이 코드의 선두로 끌어 올려진 것처럼 동작하는 자바스크립트 고유의 특징을 변수 호이스팅이라 한다.

<br />

## 값의 할당

```javascript
var score; //변수 선언
score = 80; // 값의 할당
```

```javascript
var score = 80; // 변수 선언과 값의 할당
```

**변수 선언**은 런타임 이전에 먼저 실행, **값의 할당**은 런타임에 실행

```javascript
console.log(score); //undefined
var score; // 변수 선언
score = 80; // 값의 할당
console.log(score); //80
```

score값이 undefined(런타임 이전 실행)로 초기화되었다가, 새로 80이라는 숫자로 재할당(런타임에 실행) 됨<br />
할당된 값 undefined(변수 선언) ----> 80(값의 할당)

<br />

## 값의 재할당

```javascript
var score = 80;
score = 90;
console.log(score); //90
```

- var keyword로 재할당이 가능, 변수에 저장된 값을 다른 값으로 변경 <br />
- 값을 재할당할 수 없어서 변수에 저장된 값을 변경할 수 없다면 변수가 아니라 상수(constant)이다.
- 값이 재할당되면 이전의 값들은 더이상 필요하지 않으니 이러한 값들은 가비지 콜렉터에 의해 메모리에서 자동 해제됨

<br />

## 식별자 네이밍 규칙

- 특수문자를 제외한 문자, 숫자, 언더스코어(\_), 달러 기호($)를 포함
- 식별자 처음에는 숫자가 오지 못하고 문자, 숫자, 언더스코어(\_), 달러 기호($)가 먼저 와야 한다.
- 예약어를 변수명으로 쓸 수 없음

```javascript
var person, $elem, _name, first_name, val1; //가능
```

```javascript
var first-name // 특수문자
var 1st //맨앞 숫자
var this //예약어
//불가능
```

```javascript
var firstname;
var FIRSTNAME;
var firstName;
//대 소문자 구별, 각각 다른 변수이다.
```

```javascript
var x = 3; // 의미하는 바를 모름
var score = 100; //의미론적으로 구별 가능
```

자바스크립트에서 일반적으로 변수나 함수의 이름을 카멜케이스를 사용하고, 생성자 함수, 클래스의 이름에는 파스칼 케이스를 사용한다.

```javascript
var firsName; //카멜 케이스

var FirstName; //파스칼 케이스
```
