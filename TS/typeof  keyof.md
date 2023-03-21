# typeof / keyof

## typeof

- 객체 데이터를 객체 타입으로 변환해주는 연산자
- 객체에 쓰인 타입 구조를 그대로 가져와 독립된 타입으로 만들어 사용하고 싶다면, 앞에 `typeof` 키워드를 명시해주면 해당 객체를 구성하는 타입 구조를 가져와 사용할 수 있다.

```tsx
const obj = {
    name:'bohongu',
    skills:['JS','TS'],
    power:0,
}

type Player = typeof obj;
/*
type Player = {
    name:string;
    skills:string[];
    power:number;
}
 */

const obj2:Player = {
    name:'hihi',
    skills:["html"],
    power:1
}
```

- 함수도 타입으로 변환하여 재사용 가능

```tsx
function fn(num:number, str:string):string {
    return num.toString()
}

type FnType = typeof fn; // type FnType = (num:number, str:string) => string

const fn2:FnType = (num:number, str:string):string => {
    return str
}
```

## keyof

- 객체 형태의 타입을, 따로 속성들만 뽑아 모아 유니온 타입으로 만들어주는 연산자

```tsx
type Player = {
    name:string;
    skills:string[];
    power:number;
}

type Type = keyof Player;

const a:Type = 'name'
const b:Type = 'skills'
const c:Type = 'power'
```

- 객체의 `key` 를 상수 타입으로 사용하고 싶을 때 `typeof` 로 객체 타입 변환 후 `keyof` 로 `key`들만 가져와 상수 타입으로 바꿈

```tsx
const obj = {
    red:'사과',
    yellow:'바나나',
    green:'오이',
} as const

type Color = keyof typeof obj

const color1:Color = 'red';
const color2:Color = 'yellow';
const color3:Color = 'green';
```

- `value` 값을 상수 타입으로 사용하고 싶다면 다음과 같이 사용

```tsx
const obj = {
    red:'사과',
    yellow:'바나나',
    green:'오이',
} as const

type Color = typeof obj[keyof typeof obj]

const color1:Color = '사과';
const color2:Color = '바나나';
const color3:Color = '오이';
```