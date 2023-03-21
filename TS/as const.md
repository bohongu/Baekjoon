# as const

```tsx
let a = "hi"; // let a: string
const b = "hi"; // const b: 'hi'
```

타입스크립트에서 변수를 `const`로 선언할 때와 `let`으로 선언할 때 타입 추론이 다르게 일어난다.

`const` 로 선언한 변수는 string이라는 넓은 범위의 타입 대신 구체적으로 딱 하나의 문자열 ‘hi’를 가리킨다.

```tsx
const a = [1, "hi"]; // const a:(string|number)[]
const b = { num: 1, str: "hi" }; // const b: { num:number; str:string; }
```

하지만 배열이나 객체의 경우는 `const` 로 선언하여도 구체적으로 범위를 좁히지 않는다.

```tsx
const a = [1, "hi"] as const; // const a:readonly [1, 'hi']
const b = { num: 1, str: "hi" } as const; // const b: { readonly num:1; readonly str:'hi'; }
```

타입스크립트 3.4 버전부터 도입된 **const assertion**을 활용하여 이런 경우에도 타입 추론의 범위를 좁힐 수 있게 되었다. 변수 선언문 뒤에 `as const` 를 추가하면 `const assertion`이 적용된다

```tsx
let a = "hi" as const; // let a: 'hi'
let b = 1 as const; // let b: 1
```

`let` 에서도 똑같이 적용된다.

**const assertion**은 문자열, 숫자, 배열, 객체, enum members, boolean에도 적용할 수 있다.

```tsx
let a = true ? ("true" as const) : ("false" as const); // let a: 'true' | 'false’
```

삼항 연산자의 경우 두 선택문 모두에 `as const`를 사용하면 된다
