# Node

## File System Module

```jsx
import fs = require('fs');
```

- 파일 처리와 관련된 작업을 하는 모듈, fs모듈
- 동기/비동기로 나뉜다
    - 동기 : 파일을 읽으면서 다른 작업을 동시에 할 수 없다
    - 비동기 : 파일을 읽으면서 다른 작업도 동시에 수행할 수 있고, 파일을 다 읽으면 매개변수 callback으로 전달한 함수가 호출된다.
    - 비동기적 형식이 많이 사용되지만, 서버 시작 시 세팅 파일을 읽는 작업과 같이 동기적 형식이 더 적절한 경우도 있다.

| 메서드 이름 | 설명 |
| --- | --- |
| readFile( filename, [encoding], [callback] ) | 비동기식 IO로 파일을 읽어 들인다. |
| readFileSync( filename, [encoding] ) | 동기식 IO로 파일을 읽어 들인다. |
| writeFile( filename, data, encoding=’utf8’, [callback] ) | 비동기식 IO로 파일을 쓴다. |
| writeFileSync( filename, data, encoding=’utif8 ) | 동기식 IO로 파일을 쓴다. |

## __dirname, __filename, process.cwd()

- `__filename` : file 명을 포함한 절대 경로
- `__dirname` : file 명을 제외한 절대 경로
- `process.cwd()` : node 명령을 호출한 작업 디렉토리의 절대 경로

```jsx
console.log(__filename); // C:\Users\user\Desktop\Javascript\index.js

console.log(__dirname); // C:\Users\user\Desktop\Javascript

console.log(process.cwd()); // C:\Users\user\Desktop\Javascript
```

### 경로를 나누는 이유

- cwd에서 서버를 실행할 js파일 위치에 따라서 **상대경로가 달라지기** 때문이다.
- 보통 상대경로 기준으로 파일을 불러오기 때문에 상대경로가 달라지면 파일을 올바르게 불러오지 못한다.

## path

```jsx
import path = require('path');
```

- 운영체제 별로 경로 구분자가 달라 생기는 문제를 해결하기 위해 등장

### 경로 만들기

```jsx
const path = require("path");

const pathJoin = path.join("Users", "bohongu", "text.txt");

console.log(pathJoin); // Users\bohongu\text.txt
```

```jsx
const path = require("path");

const pathResovle = path.resolve("Users", "bohongu", "text.txt");

console.log(pathResovle); // C:\Users\user\Desktop\Javascript\Users\bohongu\text.txt
```

### 디렉토리 얻기

```jsx
const path = require("path");

const pathDirname = path.dirname("/Users/bhongu/text.txt");

console.log(pathDirname); // /Users/bhongu
```

### 파일 이름 얻기

```jsx
const path = require("path");

const pathBasename = path.basename("/Users/bhongu/text.txt");

console.log(pathBasename); // text.txt
```

```jsx
const path = require("path");

const pathBasename = path.basename("/Users/bhongu/text.txt", ".txt");

console.log(pathBasename); // text
```

- 두번째 인자로 `.` 을 포함한 확장자를 넘기면 순수한 파일 이름만 얻게 된다.

### 파일 확장자 얻기

```jsx
const path = require("path");

const pathExtname = path.extname("/Users/bhongu/text.txt");

console.log(pathExtname); // .txt
```