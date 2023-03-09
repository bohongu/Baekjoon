# Closure

- 외부 변수와 외부 변수를 쓰는 함수의 조합
- 함수와 해당 함수가 선언된 렉시컬 환경의 조합
- 외부 함수가 반환된 후에도 외부 함수의 변수 범위 체인에 접근할 수 있는 함수
- 전역 변수의 사용을 억제하고, 정보를 은닉하기 위해 사용

### 가정

`cnt`값은 무조건 `cntPlus`로만 변화시키고 싶은 경우라고 가정

```jsx
let cnt = 0;
function cntPlus() {
  cnt = cnt + 1;
}

console.log(cnt); // 0
cntPlus();
console.log(cnt); // 1

// 많은 코드들
cnt = 100;
// 많은 코드들
cntPlus();
console.log(cnt); // 101
```

`cntPlus`로만 `cnt`값을 변화시키고 싶은데 `cnt`변수에 접근 가능하기 때문에 저 상황을 완벽하게 구현할 수 없다.

### Closure로 구현

1.  전역변수인 `cnt`에 접근할 수 없게 하기 위해 함수로 감싸 지역변수로 만든다.
2. `cntPlus`도 실행시킬 수 없게 되어버린다. => `return` 시켜주면 해결
3. `cnt`를 출력하고 싶을 때도 출력하는 함수를 만들어서 `return` 시켜준다.

```jsx
function closure() {
  let cnt = 0;
  function cntPlus() {
    cnt = cnt + 1;
  }
  function printCnt() {
    console.log(cnt);
  }

  return { cntPlus, printCnt };
}

const cntClosure = closure();
console.log(cntClosure); // { cntPlus: [Function: cntPlus], printCnt: [Function: printCnt] }
cntClosure.printCnt(); // 0
cntClosure.cntPlus();
cntClosure.printCnt(); // 1
```

추가적인 기능을 구현할 때는 함수를 `return`하는 방식으로 구현 가능