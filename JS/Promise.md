# Promise

- 비동기 작업을 조금 더 편하게 처리할 수 있도록 ES6에 도입된 기능
  - 비동기 처리 : 특정 코드의 실행이 완료될 때까지 기다리지 않고 다음 코드를 먼저 수행하는 자바스크립트 특성
- 이전에는 비동기 작업을 처리할 때에는 콜백 함수로 처리 하였다.

![Untitled](https://user-images.githubusercontent.com/91203029/217747178-b64a846b-3169-415e-b7db-77434ec7e34e.png)

비동기적으로 처리해야 하는 일이 많아질수록, 코드의 깊이가 깊어지고 코드 읽기가 복잡하다. 이런 식의 코드를 콜백 지옥이라고 부르고 Promise를 사용하여 현상을 방지할 수 있다.

### Promise를 사용하면 얻는 이점

- 비동기 처리 시점을 명확하게 표현 가능
- 연속된 비동기 처리 작업을 수정, 삭제, 추가가 편하다
- 비동기 작업 상태를 쉽게 확인 가능
- 코드 유지 보수성 증가

### Promise 만들기

성공할 때 : resolve 호출
실패할 때 : reject 호출

```jsx
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

myPromise.then((n) => {
  console.log(n); // 1
});

/*
.then(...)을 붙여서 작업이 끝나고 나서 또 다른 작업을 설정
*/
```

```jsx
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("에러발생"));
  }, 1000);
});

myPromise
  .then((n) => {
    console.log(n);
  })
  .catch((error) => {
    console.log(error); // Error: 에러발생
  });

/*
.catch를 통해 실패햇을 시 수행할 작업 설정
*/
```

### Promise 체이닝

```jsx
function promise(n) {
  return new Promise((resolve, reject) => {
    const value = n + 1;
    if (value === 5) {
      reject(new Error("value is five"));
    }
    console.log(value);
    resolve(value);
  });
}

promise(0)
  .then((n) => promise(n)) // 1
  .then((n) => promise(n)) // 2
  .then((n) => promise(n)) // 3
  .then((n) => promise(n)) // 4
  .then((n) => promise(n)) // 5
  .catch((n) => console.log(n)); // Error: value is five
```

- 콜백 지옥 방지

### API 호출

```jsx
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json()) // JSON 데이터를 Javascript 객체로 변환
  .then((json) => console.log(json)); // Javascript 객체로 변환한 데이터를 콘솔에 출력

// {userId: 1, id: 1, title: 'delectus aut autem', completed: false}
```
