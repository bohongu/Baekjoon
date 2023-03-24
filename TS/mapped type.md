# mapped type

- 기존에 정의되어 있는 타입을 새로운 타입으로 변환해 주는 문법
    <img width="703" alt="%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-03-23_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_10 46 19" src="https://user-images.githubusercontent.com/91203029/227390192-f3e467e8-c81e-4f5f-a562-f2484a870d3f.png">

- 자바스크립트의 `map` 함수를 타입에 적용했다고 보면된다.

### mapped type의 기본 문법

```tsx
{ [ P in K ] : T }
{ [ P in K ] ? : T }
{ readonly [ P in K ] : T }
{ readonly [ P in K ] ? : T }
```

**적용**

```tsx
type Heroes = "Hulk" | "Thor" | "Capt";
```

```tsx
type HeroProfiles = { [K in Heroes]: number };
const heroInfo: HeroProfiles = {
  Hulk: 54,
  Thor: 1000,
  Capt: 33,
};
```

실용 예제 1

```tsx
type Subset<T> = {
  [K in keyof T]?: T[K];
};
```

- 키와 값이 있는 객체를 정의하는 타입을 받아 그 객체의 부분 집합을 만족하는 타입으로 변환해주는 문법

```tsx
interface Person {
  age: number;
  name: string;
}
```

- `Subset` 타입을 적용하면 아래와 같은 객체를 모두 정의할 수 있다.

```tsx
const ageOnly: Subset<Person> = { age: 23 };
const nameOnly: Subset<Person> = { name: "Tony" };
const ironman: Subset<Person> = { age: 23, name: "Tony" };
const empty: Subset<Person> = {};
```
