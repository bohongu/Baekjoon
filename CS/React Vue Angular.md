# React Vue Angular

### 웹 프론트엔드 프레임워크

- 과거와 달리 최근에는 자바스크립트 진영에서도 프레임워크를 이용한 개발이 필수로 여겨지고 있다

### Stack Overflow 질문 점유율

![Untitled](https://user-images.githubusercontent.com/91203029/228514498-e2f6cf83-3b88-4856-85aa-85de72373d20.png)

## React

- 2013년 Facebook이 개발하고 출시
- 웹 페이지의 컴포넌트를 렌더링하고 빌드하는데 초점을 둔, 가장 인기 있는 JS 라이브러리
- 사용자에게 전달되는 뷰만 신경 쓰고 나머지 기능은 서드파티 라이브러리에 의존한다. ( 리덕스, 라우터… )
  - ‘공식 라이브러리’ 이런 개념이 딱히 없다 → 한 가지 문제를 해결하기 위해 여러가지 방식의 솔루션들이 존재
- Virtual Dom, JSX, React Native
- 단방향 데이터 바인딩

## Vue

- 2014년 Google 직원인 Evan You가 개발
- 입문자가 사용하기에 쉽다
- 공식 라우터와 상태 관리 라이브러리가 존재
- Angular의 양방향 바인딩, React의 Virtual DOM 방식 모두 가지고 있다
- 학습 난이도가 낮다

## Angular

- 2010년 Google이 개발하고 출시
- Typescript 기반 프레임워크
- 다양한 기능들이 이미 내장되어 있음 ( http 클라이언트, 라우터, 다국어 지원… )
- 학습 난이도가 높다
- 양방향 바인딩, 단방향 바인딩
  - 데이터 바인딩 : 화면에 보이는 데이터와 브라우저 메모리에 있는 데이터를 일치 시키는 것
  - 양방향 바인딩 : 뷰 변경 → 모델 변경 & 모델 변경 → 뷰 변경
  - 단방향 바인딩 : 모델 변경 → 뷰 변경 & 뷰 변경 → 모델 변경❌ (모델 변경 코드 작성해야함)

### 러닝 커브

![Untitled 1](https://user-images.githubusercontent.com/91203029/228514648-e67f205d-eda1-49fb-93de-79e90223fc2e.png)

- Angular : 타입스크립트를 익혀야하고, 의존성 주입과 문법이 난이도를 높임
- React : JSX를 익혀야하고, Redux 등 상태 관리 라이브러리가 필수적으로 여겨져 난이도가 높음
- Vue : 기본 JS / HTML 문법만 알면 배우기 쉽고 공식 홈페이지 가이드도 변역이 잘되어 있어 좋다

### GitHub 트렌드 ( 깃허브 저장소 )

**React**

![Untitled 2](https://user-images.githubusercontent.com/91203029/228514793-76c1b815-3f94-42ba-899a-cd31444318f3.png)

**Vue**

![Untitled 3](https://user-images.githubusercontent.com/91203029/228514868-967d907b-fdde-46f4-88ec-498b195374ae.png)

**Angular**

![Untitled 4](https://user-images.githubusercontent.com/91203029/228514922-1975f1fd-baea-4b27-a183-5c5fd2186b39.png)

- 꾸준한 사용량과 관심 : React
- 떠오르는 관심 : Vue
