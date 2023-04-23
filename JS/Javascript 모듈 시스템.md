# JavaScript 모듈 시스템

## 모듈 시스템 종류

- `AMD` - 가장 오래된 모듈 시스템 중 하나로 require.js라는 라이브러리를 통해 개발
- `CommonJS` - NodeJS 환경을 위해 만들어진 모듈 시스템
- `UMD` - AMD와 CommonJS와 같은 다양한 모듈 시스템을 함께 사용하기 위해 개발
- `ES Module` - `ES6` 에 도입된 자바스크립트 모듈 시스템

## ES Module 방식

`<script>` 태그에 `type=”module”` 속성을 추가해주면, 이 파일은 모듈로서 동작한다.

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <title>ES Module</title>
    <script type="module" src="module/app.js"></script>
  </head>
  <body></body>
</html>
```

- 외부로 내보낼 때는 `export` , `export default` 를 사용하고 외부 모듈을 불러올 때는 `import` 를 사용
- `export default` 를 사용하면 하나 기본 함수를 내보낼 수 있다. 단, 모듈 당 하나만 가능

```jsx
// module/math.js

export function add(a, b) {
  return a + b;
}

export default function minus(a, b) {
  return a - b;
}
```

```jsx
// module/index.js

import minus, { add } from "./math.js";

console.log(add(1, 2)); // 3
console.log(minus(2, 1)); // 1
```

## CommonJS 방식

내보낼 때는 `exports` , `module.exports` 를 사용하고 외부 모듈을 불러올 때는 `require` 를 사용

<aside>
💡 **NodeJS**에서는 기본적으로 `CommonJS` 모듈 시스템을 사용하고 있으며, **NodeJS** 버전 13.2부터 `ES모듈` 시스템에 대한 정식 지원이 시작됨에 따라 다른 도구 없이 **NodeJS**에서도 쉽게 `ES모듈` 을 사용할 수 있다

</aside>

```jsx
// commonjs/math.js

exports.add = function (a, b) {
  return a + b;
};

exports.minus = function (a, b) {
  return a - b;
};
```

```jsx
// commonjs/index.js

const { add, minus } = require("./math");

console.log(add(1, 2)); // 3
console.log(minus(2, 1)); // 1
```

- `module.exports` 를 사용하여 하나의 객체로 묶어서 내보낼 수 있다.

```jsx
// commonjs/math.js

const add = function (a, b) {
  return a + b;
};

const minus = function (a, b) {
  return a - b;
};

module.exports = { add, minus };
```

## ES Module for NodeJS

- package.json → type=”module” 선언