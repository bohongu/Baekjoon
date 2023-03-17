# type vs interface

- 객체의 타입의 이름을 지정하는

## 차이점

### 상속

**type**

- `&` 를 사용하여 상속

```tsx
type someType = {
    title:string
}

type someType2 = someType & {
    description : string
}
```

**interface**

- `extends` 를 사용하여 상속

```tsx
interface someInterface  {
    title:string
}

interface someInterface2 extends someInterface {
    description:string
}
```

### 선언적 확장 / 자동 확장

```tsx
interface someInterface {
    title:string
}

interface someInterface {
    description:string
}

// 같은 interface 명으로 Window를 다시 만든다면, 자동으로 확장이 된다.
```

```tsx
type someType = {
    title:string
}

type someType = {
    description:string
}

// Error: Duplicate identifier 'someType'.
// type은 되지않는다.
```

### computed value

- `type` 은 가능하지만 `interface` 는 불가능

```tsx
type values = 'a' | 'b'

type aBType = {
    [value in values] : string
}

const aB : aBType = {
    a:'a',
    b:'b'
}

interface someInterface {
    // Error : A mapped type may not declare properties or methods
    [key in value]:string
}
```

### primitive types

- `type` 은 primitive types를 지정할 수 있지만 `interface` 는 불가능

```tsx
type stringType = string;

const hello:stringType = 'Hello'
```