# const enum

- enum의 단점을 개선하기 위해 등장

> In most cases, enums are a perfectly valid solution. However sometimes requirements are tighter. To avoid paying the cost of extra generated code and additional indirection when accessing enum values, it’s possible to use const enums. Const enums are defined using the const modifier on our enums.
> 

```tsx
const enum Enum {
A = 1,
B = A * 2,
}

// .JS
"use strict";

enum Enum {
A = 1,
B = A * 2,
}

// .JS
"use strict";
var Enum;
(function (Enum) {
Enum[Enum["A"] = 1] = "A";
Enum[Enum["B"] = 2] = "B";
})(Enum || (Enum = {}));
```

- 동일한 코드여도 `const` 를 붙인다면 컴파일 후 아무 코드도 남지않게 된다.
- 타입스크립트를 사용용한다면 대개 프론트 프레임워크 내부에서 사용하거나, 패키지를 만들 때 사용할텐데 이 경우에는 값이 상수로 치환된다면, 타이핑 자체가 불가능해진다. 이런 상황을 막기 위해 tsconfig에서 isolatedModules 옵션을 true로 설정
- 용량 거 얼마나 나간다고, 빠른 생산성 추구 => Enum
- 용량을 가급적 줄여야 하는 경우 => as const
- CRA bolerplate나 Next를 사용한다면 => const Enum 사용 불가. 사용하게 ‘될 경우 const enums are not supported 에러
- const enum이 용량을 줄이는 건 어차피 isolatedModules 옵션을 활성화하게 되면 의미가 없어지므로 유의