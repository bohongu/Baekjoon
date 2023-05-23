# getLayout

- 페이지 마다 다른 레이아웃 적용하기

### types/layout.ts

![types](https://github.com/bohongu/TIL/assets/91203029/00ee6b90-55c2-4733-ad40-37ef36bd2156)

### pages/\_app.tsx

- 커스텀 레이아웃을 설정하지 않으면 기본레이아웃(border: 2px solid blue)이 적용된다

![app](https://github.com/bohongu/TIL/assets/91203029/d6a409a2-6109-4f13-a898-22f3c288852d)

### pages/test.tsx

- 커스텀 레이아웃을 지정하지 않아 기본레이아웃(border:2px solid blue)가 적용되는 모습

![test](https://github.com/bohongu/TIL/assets/91203029/fee46ee8-3dca-48b4-b4dc-8cd4bd1d38cb)

### pages/layout/TestLayout.tsx

- TestLayout. 새로운 레이아웃 생성(border: 2px solid red)

![testlayout](https://github.com/bohongu/TIL/assets/91203029/4c73dffc-7c91-40f3-b0da-c55eb71aeed9)

### pages/index.tsx

- TestLayout가 index컴포넌트를 감싸도록 설정
- TestLayout(border: 2px solid red)로 감싸진 index 렌더링

![index](https://github.com/bohongu/TIL/assets/91203029/9f9205b1-a33d-438e-8655-0b08589fa584)

- 페이지 당 레이아웃을 정의할 수 있고, 함수를 반환하기 때문에 중첩이 가능하다
- useEffect or 다른 것들을 사용하여 클라이언트 측에서 데이터를 가져올 수 있다
- pages가 아니므로 getStaticProps, getServerSideProps를 사용할 수 없다
