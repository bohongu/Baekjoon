# Callback

## 콜백함수란

함수는 또 다른 함수를 인자로 전달 받을 수 있다

```jsx
function main(param) {
  param();
}

main(function () {});
```

다른 함수의 인자로 전달되는 함수를 ‘콜백함수’라고 한다.

‘콜백함수’는 콜백함수를 전달받은 함수에 의해서 호출된다.

## 이해하기

```jsx
function main(x) {
  console.log("사전작업");
  x();
  console.log("정리작업");
}

function hello() {
  console.log("Hello");
}

main(hello);/*사전작업
               Hello
               정리작업
            */

// main함수에 의해서 hello함수가 불려진다
```

```jsx
function main(x) {
  x();
}

main(() => {
  console.log("Hello");
});

// 보통 화살표 함수로 많이 사용한다
```

## 응용하기

```jsx
function greetToUser(greet) {
  const name = "bohongu";
  greet(name);
}

function greetInKorean(name) {
  console.log(`${name}, 안녕하세요`);
}

function greetInEnglish(name) {
  console.log(`Hello, ${name}`);
}

greetToUser(greetInKorean); //bohongu, 안녕하세요
greetToUser(greetInEnglish); //Hello, bohongu
```