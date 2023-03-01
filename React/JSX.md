# JSX

- Javascript에 XML을 추가한 확장 문법
- 공식적인 자바스크립트 문법은 아니다
- 브라우저에서 실행되기 전 Babel이 JSX를 자바스크립트로 변환 해준다.

## JSX 문법

### 반드시 부모 요소 하나가 감싸는 형태여야 한다.

Virtual DOM에서 컴포넌트 변화를 감지할 때 효율적으로 비교할 수 있도록 컴포넌트 내부는 하나의 DOM 트리 구조로 이루어져야 한다.

- 잘못된 예시

```
function App() {
    return (
            <h1>Hello</h1>
            <h2>World</h2>
    );
}
```

- 정상 코드

```jsx
function App() {
  return (
    <>
      <h1>Hello</h1>
      <h2>World</h2>
    </>
  );
}
```

### 자바스크립트 표현식

JSX 안에서 자바스크립트 표현식을 작성하려면 `{}` 로 감싸준다.

```jsx
function App() {
  const hello = "Hello";

  return (
    <>
      <h1>{hello}</h1>
      <h2>World</h2>
    </>
  );
}
```

- if문 대신 삼항 연산자 사용

```jsx
function App() {
  const check = true;

  return (
    <>
      <h1>{check ? "Hello" : "Bye"}</h1>
      <h2>World</h2>
    </>
  );
}
```

### 주석

JSX 내부의 주석은 `{/* 주석 내용 */}` 형태로 작성한다.

열리는 태그 내부에서는 `// 주석 내용` 형태로도 작성 가능하다.

```jsx
function App() {
    return (
      <>
        {/* 주석 내용 */}
        <div //태그 내 주석
        >
          주석
        </div>
      </>
    );
  };
```

### Style & className

`font-size` 처럼 `-` 으로 구분되어 있는 이름은 `fontSize` 처럼 camelCase 형태로 작성 한다

class를 설정할 때는 `className` 으로 작성한다

```jsx
function App() {
  const style = {
    fontSize: 24,
    paddingTop: "1rem",
  };

  return <div style={style}>Hello World</div>;
}
```

```jsx
function App() {
  return <div className="title">Hello World</div>;
}
```