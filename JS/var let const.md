# var let const

## 스코프 (Scope)

### Fuction Scope (함수 범위) - var

### Block Scope (블록 범위) - let

```jsx
function main() {
    if (true) {
      var x = "hi";
    }
    console.log(x);
  }
  
  main(); // hi

/*   
var로 선언된 변수는 자동으로 함수 스코프를 갖고 있다 =>
변수가 선언된 함수 내부 어디서든 접근 가능
*/
----------------------------------------------------------------------------------------
function main() {
  var x = "hello";
  if (true) {
    var x = "bye";
  }
  console.log(x); // bye
}

main();

/*   
2번 line x와 4번 line x는 같은 스코프를 가지고 있다
var는 같은 스코프 내에서 변수의 중복 선언을 허용
*/
```

```jsx
function main() {
  if (true) {
    let x = "hi";
  }
  console.log(x);
}

main(); // Uncaught ReferenceError: x is not defined

/* 
let은 함수 스코프가 아닌 블록 스코프를 갖게 된다 변수가 선언된 블록 내부에서만 접근 가능 
*/
```

### Global Scope (전역 범위)

```jsx
var hello = "hello"; // var로 변수를 전역변수로 만들면 window객체에 속성으로 등록

/*
window 객체 - 브라우저 정보를 가지고 있는 단 하나의 객체. 코드, 사용하고 있는 라이브러리들이 공유하고 있는 전역객체 =>
window 객체에 속성을 추가하는 것은 위험하다 (전역 객체에 선언한 변수가 다른 코드에 의해 덮어씌거나 우리의 코드가 다른 곳에서 할당해 놓은 속성의 값을 덮어 씌어버릴 수 있다)
*/
```

## 중복 선언 (Variable redeclaration)

```jsx
var x = "hello";

// 수천 ~ 수만 줄의 코드
var x = "bye";

console.log(x); //bye

/*
var는 같은 이름의 변수를 증복 선언 가능
나중에 선언한 것으로 덮어씌어짐
*/
```

```jsx
let x = "hello";

// 수천~수만 줄의 코드
let x = "bye";

console.log(x); // Uncaught SyntaxError: Identifier 'x' has already been declared
```

## 호이스팅 (Hoisting)

### 프로그램이 실행되기 이전에 변수의 선언과 초기화를 분리해서 변수의 *선언 부분을* 프로그램 맨 위로 *끌어올려 주는* 것 (프로그램이 실행되기 이전에 JS에게 변수의 존재를 알리는 것)

```jsx
console.log(x);

var x = "hello"; // undefined

console.log(x); // hello
```

```jsx
console.log(x); // Uncaught ReferenceError: Cannot access 'x' before initialization

let x = "hello";

console.log(x);

/*
TDZ - Temporal Dead Zone (일시적 사각지대)
let으로 선언된 변수는 호이스팅이 되어서 선언문이 맨 위로 올라가지만 코드상에 있는 선언문에 닿기까지는
TDZ에 들어가게 된다 그래서 선언문 이전에 접근한 1번 Line에 x는 TDZ안에 있다
JS는 TDZ에 들어 있는 변수의 접근을 혀용하지 않음 -> 에러가 뜸
 */
```

### Const

- Block Scope
- 중복 선언 불가
- 선언문 이전 접근 불가

```jsx
const x = "hello"; // 변수가 아닌 상수 선언
x = "bye"; // Uncaught TypeError: Assignment to constant variable.

let y = "hello";
y = "bye"; // 가능
```