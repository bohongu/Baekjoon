# load, defer, async

## script 로드 문제점

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <script>
      const btn = document.querySelector("#btn");
      btn.addEventListener("click", () => {
        alert("hello world");
      });
    </script>
    <title>Document</title>
  </head>
  <body>
    <button id="btn">버튼</button>
  </body>
</html>
```

- `btn` 이 `null` 이기 때문에 `btn.addEventListener` 호출 시점에 에러가 발생
- 브라우저가 HTML 파싱한 후 자바스크립트에서 HTML요소를 제어할 수 있도록 DOM객체를 생성하는데, 위 코드는 HTML파싱 하기전에 DOM요소에 접근하려고 했기 때문

## script 로드 해결방법

### body 최하단에 script 태그 위치

- HTML 파싱 후 script태그를 로드할 수 있도록 body 최하단에 위치

### load 이벤트 리스너 등록

- `windw.onload` - HTML파싱, DOM생성, 외부 콘텐츠(images, script, css 등)가 로드된 후 발생하는 이벤트
- `DOMContentLoaded`  - HTML파싱 DOM생성 후 발생하는 이벤트

## HTML5 script 로드 해결방법

HTML5에서는 `defer` `async`속성을 통해 비동기 `script`로드가 가능해져 이 문제가 근본적으로 해결

- `defer` - HTML 파싱과 함께, 비동기로 자바스크립트를 불러온다.
    - HTML 파싱이 완료된 후 자바스크립트 실행

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <script scr="index.js" defer></script>
    <title>Document</title>
  </head>
  <body>
    <button id="btn">버튼</button>
  </body>
</html>
```

- `async` - HTML 파싱과 함께, 비동기로 자바스크립트를 불러온다.
    - HTML파싱이 완료되지 않았떠라도, 먼저 로딩되는 자바스크립트부터 실행
    - 자바스크립트가 실행할 때는 HTML파싱이 중단

```jsx
<!DOCTYPE html>
<html lang="en">
  <head>
    <script scr="index.js" async></script>
    <title>Document</title>
  </head>
  <body>
    <button id="btn">버튼</button>
  </body>
</html>
```