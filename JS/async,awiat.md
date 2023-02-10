# async/await

- ES8에 해당하는 문법으로 Promise를 쉽게 사용할 수 있게 해준다

```jsx
function timer(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
}

/* promise */
timer(1000)
  .then(function () {
    console.log("작업");
    return timer(1000);
  })
  .then(function () {
    console.log("작업");
    return timer(1000);
  })
  .then(function () {
    console.log("작업");
  });

/* async/await */
async function run() {
  await timer(1000);
  console.log("작업");

  await timer(1000);
  console.log("작업");

  await timer(1000);
  console.log("작업");
}

run().then(() => {
  console.log("작업 끝");
}); // async function도 Promise를 반환하므로, Promise를 이용해 만든 함수처럼 사용 가능

// async/await는 동기적인 코드로 작성하는 것 처럼 사용할 수 있다
```

### 에러

```jsx
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function makeError() {
  await sleep(1000);
  const error = new Error();
  throw error;
}

async function run() {
  try {
    await makeError();
  } catch (e) {
    console.error(e);
  }
}

run();

/*
에러를 발생 시킬때에는 throw를 사용하고, 에러를 잡아낼 때에는 try/catch문을 사용
*/
```