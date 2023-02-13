# Virtual DOM & Virtual DOM의 작동원리

## [브라우저 렌더링 과정](https://github.com/bohongu/TIL/blob/main/CS/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%EA%B0%80%20%EC%82%AC%EC%9A%A9%EC%9E%90%EC%97%90%EA%B2%8C%20%EB%B3%B4%EC%9D%B4%EB%8A%94%20%EC%88%9C%EC%84%9C.md)

<br />

## DOM 조작의 비효율성

<br />

DOM에 변화가 생김 : HTML,CSS 파싱 ~ 화면에 PAINTING하는 과정이 다시 반복됨.

DOM을 조작할 때마다 이러한 과정이 반복되는 것은 실제로 많은 연산을 수반하고 비용이 많이 드는 작업 - 프로그램 성능 저하.

SSR(Server Side Rendering)

- DOM은 정적인 페이지를 보여주는데 많이 사용, DOM의 동적인 변화가 크게 문제되지 않음

SPA 등장 → CSR(Client Side Rendering)

- DOM 업데이트가 복잡하고 많이 발생
- DOM 조작으로 화면을 렌더링하는 비효율성 해결, 최적화의 필요성 → **Virtual DOM**

<br />

## Virtual DOM

DOM 노드 트리를 복제한 자바스크립트 객체

- 실제 DOM과 같은 class, style 등 속성을 가지고 있다
- getElementById와 같은 DOM api들은 가지고 있지 않다

<br />

## Virtual DOM의 동작방식

<p align=center>
<img width=95% src='https://user-images.githubusercontent.com/91203029/218453595-03eedceb-9f98-492c-ac65-759e606b5ebc.png' />
</p>

1. 브라우저가 실제 DOM tree 생성하고 브라우저 화면에 ui 렌더
2. DOM tree를 가벼운 버전으로 복사해 Virtual DOM을 만듦
3. 노드에 변화가 생기면 새로운 Virtual DOM tree 재생성
   - 새로운 Virtual DOM tree 재생성이 비효율적이라고 느낄 수 있음
   - 하지만 DOM조작이 비효율적이라는 것은 DOM tree 업데이트할 때가 아닌 렌더할 때 비용이 많이 든다는 것
   - Virtual DOM은 렌더링 하지 않고 메모리 상에서 빠르게 트리를 변경하는 것 뿐
4. `diff(previous:VTree, current:VTree) -> PatchObject`
   매개변수로 이전 DOM Tree와 새로운 DOM Tree를 받아옴 이 함수로 변경 전 후 DOM Tree의 차이를 확인
5. `patch(rootNode:DOMNode, patches:PatchObject) -> DOMNode newRootNode`

차이를 확인 후 실제 DOM에 변경된 부분을 적용 후 렌더링

<br />

## [+ Virtual DOM의 중요성](https://velopert.com/3236)
