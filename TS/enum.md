# enum

## 사용하는 이유

1. 분야별로 종류를 정의하여 명확하게 사용하기 위해서.

관리자(0), 사용자(1), 게스트(2)로 관리하는 경우 관리자 === 0 이라는 것을 기억하고 코딩해야한다.

```tsx
if(userType === 0){
    console.log('관리자이다.')
}
```

`enum`을 정의해두면 사용자 권한 분야만 따로 모아서 정의(열거)해두고, 의미를 명확하게 파악하여 사용할 수 있다.

```
enum Auth {
    admin, // 값 생략시 0
    user,  // +1 = 1
    guset, // +2 = 2
}

//Auth.admin(=0)
if(userType === Auth.admin) {
    console.log('관리자이다.')
}
```

1. 하드코딩의 실수를 줄이기 위해서.

React 사용시, Redux 의 액션 타입을 정의할 때도 활용할 수 있다

## 문법

1. 기본적으로 0부터 1씩 증가하는 값을 갖는다.

```
enum Auth {
    admin,
    user,
    guest
}

console.log(Auth.admin) // 0
console.log(Auth.user) // 1
console.log(Auth.guest) // 2
```

1. 숫자 값을 지정해줄 수 있따.

```
enum Auth {
    admin = 20,
    user = 30,
    guest = 40
}

console.log(Auth.admin) // 20
console.log(Auth.user) // 30
console.log(Auth.guest) // 40
```

1. 문자열도 지정해줄 수 있다.

```tsx
enum Auth {
    admin = 'ad',
    user = 'us',
    guest = 'gu'
}

console.log(Auth.admin) // "ad"
console.log(Auth.user) // "us"
console.log(Auth.guest) // "gu"
```

## **JS 객체와의 차이점**

1) enum은 한번 생성되면, 속성 추가 및 수정이 불가하다. 객체는 생성 이후에도 속성을 추가하고 변경할 수 있다.

2) enum은 속성 값으로 숫자, 문자열만 할당할 수 있다. 객체는 온갖 것을 다 넣을 수 있다.

## enum의 단점

1. 컴파일시 코드의 양이 증가한다.
2. Tree-shaking이 되지않는다.
    - enum은 IIFE(즉시 실행 함수)로 컴파일 되기 때문에 enum의 구현과정에서 코드는 자체적으로 쓰이게 된다. 따라서 enum을 선언만 해두고 사용하지 않는다하더라도 실제 컴파일된 코드에서는 enum 코드가 살아 있게 된다.