# React 생명주기

Mounting(컴포넌트 생성) → Updating(업데이트) → Unmounting(제거)

## Class 컴포넌트 라이프 사이클

- 컴포넌트 중심

## Mount

- 컴포넌트가 처음 생성 될 때 발생하는 생명 주기

### constructor

- 컴포넌트 생성자 멤서드, 컴포넌트가 생성되면 가장 먼서 실행되는 메서드
- this.props, this.state에 접근이 가능하고 리액트 요소 반환

### getDerivedStateFromProps

- props로부터 파생된 state를 가져온다. props로 받아온 것을 state에 넣어주고 싶을 때 사용

### render

- 컴포넌트 렌더링 메서드

### componentDidMount

- 컴포넌트의 첫번째 렌더링이 마치면 호출되는 메서드
- 이 메서드가 호출되는 시점에는 화면에 컴포넌트가 나타난 상태
- 외부 라이브러리 연동, ajax요청 등을 함

## Updating

- 컴포넌트가 업데이트는 시점

### getDerivedStateFromProps

- 컴포넌트의 props나 state가 바뀌었을때도 호출

### shouldComponentUpdate

- 컴포넌트가 리렌더링 할지 말지 결정하는 메서드 (boolean)

### componentDidUpdate

- 컴포넌트가 업데이트 되고 난 후 발생

## Unmount

- 컴포넌트가 화면에서 사라지는 것

### componentWillUnmount

- 컴포넌트가 화면에서 사라지기 직전에 호출
- `setTimeout` 을 했다면 `clearTimeout` 를 통해 제거

## 함수 컴포넌트 라이프 사이클

- 데이터 중심
- 클래스 컴포넌트에서는 `componentWillMount` ,`componentDidMount` , `componentDidUpdate` ,`componentWillUnmount` 를 컴포넌트 당 한 번씩 사용했지만, `useEffect` 는 데이터의 개수에 따라 여러 번 사용

### useEffect

```jsx
useEffect(() => {
    console.log('Mount')
},[someState])
```

- 컴포넌트가 첫 렌더링될 때 한 번 실행되고, someState가 바뀔 때마다 실행된다. → `componentDidMount` 와 `componentDidUpdate` 가 합쳐진 셈

```jsx
useEffect(() => {
  console.log("Mount");
  return () => {
    console.log("UnMount");
  };
}, [someState]);
```

- `return` 을 제공(clean-up)하여 `componentWillUnMount` 의 역할도 담당