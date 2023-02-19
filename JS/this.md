# this

MDN의 `this` 설명

> 대부분의 경우 `this` 의 값은 함수를 호출한 방법에 의해 결정된다
> 
- `this` 는 호출한 놈

```jsx
function printThis() {
  console.log(this); // default this => window
}

printThis();

let person1 = {
  name: "홍길동",
  printThis,
};

person1.printThis(); // {name: '홍길동', printThis: ƒ}

let person2 = {
  name: "홍길동2",
  printThis,
};

person2.printThis(); // {name: '홍길동2', printThis: ƒ}
```

- 호출한 놈이 없으면 `window` 객체

```jsx
let person = {
  fullname: "bohongu",
  printThis: function () {
    console.log("this === person :", this === person);
    console.log("this === window :", this === window);
  },
};

person.printThis();
//this === person : true
//this === window : false

let printThis = person.printThis;
printThis();
//this === person : false
//this === window : tru
```

- 예외
    - 전역스코프에서 `this` 는 window객체
    - 화살표 함수에서 `this`
    - Strict Mode에서 `this`

### Arrow Function `this`

- 자신을 포함하고 있는 외부 scope에서 `this` 계승받는다

```jsx
Anonymous Function

let person = {
  name: "홍길동",
  age: 20,
  hello: function () {
    setTimeout(function () {
      console.log(this); // window 객체
      console.log(this.name); // undefined
      console.log(this.age);
    }, 1000);
  },
};

person.hello();

-----------------------------------------------------------

Arrow Function

let person = {
  name: "홍길동",
  age: 20,
  hello: function () {
    setTimeout(() => {
      console.log(this); // {name: '홍길동', age: 20, hello: ƒ}
      console.log(this.name); // 홍길동
      console.log(this.age); // 20
    }, 1000);
  },
};

person.hello();
```

### 화살표 함수를 쓰면 안되는 경우

- 객체 메서드를 선언할 때

```
let person = {
  name: "홍길동",
  printThis: () => {
    console.log(this); // window객체
  },
};
person.printThis(); // window객체

// 화살표함수는 외부scope를 계승받음
```

- addEventListener 함수의 콜백 함수에서 사용하면 this가 상위 컨텍스트를 가리킨다

```
Arrow Function

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  console.log(this); // window
});

--------------------------------------------------------------
Anonymous Function

btn.addEventListener("click", function () {
  console.log(this); // button
});
```

### Strict Mode `this`

```jsx
function printThis() {
  console.log(this);
}

printThis(); // window 객체

-----------------------------------------------------------

'use strict'
function printThis() {
    console.log(this);
  }
  
  printThis(); // undefined
```

### Bind

```jsx
// ES5 bind - this 설정
function printThis() {
    console.log(this);
  }
  let person1 = {
    name: "홍길동",
  };
  
  let person2 = {
    name: "홍길동2",
  };
  
  printThis(); // window 객체
  let printThis1 = printThis.bind(person1); // { name:'홍길동' }
  let printThis2 = printThis1.bind(person2); // { name:'홍길동'} => bind는 한번만 사용가능
  printThis2();
```