# Prototype

- 자바스크립트는 Prototype 언어
- 자바스크립트의 모든 객체는 자신의 부모 역할을 담당하는 객체와 연결되어 있다. 객체 지향의 상속 개념과 같이 부모 객체의 프로퍼티 or 메서드를 상속받아 사용할 수 있다.
- 이러한 부모 객체를 Prototype 객체라고 한다.
- prototype은 자바스크립트에서만 사용되는 것은 아니고 하나의 디자인 패턴이다.

```jsx
function Player() {}

const bohongu = new Player();

console.log(bohongu); // Player { __proto__: Object }
console.log(typeof bohongu); // object
```

- 처음 `Player` 함수를 선언할 때 함수의 프로토타입 객체도 함께 생성된다. 이 프로토타입 객체는 함수를 사용해서 새로운 객체를 생성할 때 원본 객체 역할을 해줄 객체이다.
- `new Player()` 로 새로운 객체를 만들면 `Player`함수가 생성될 때 함께 생성된 `Player` 함수의 프로토타입 객체를 복제해서 새로운 객체를 만든 것

## Prototype에 들어있는 constructor와 __**proto**__

### constructor

```jsx
function Player() {}

console.log(Player.prototype.constructor); // Player
```

- 자기 자신을 참조하고 있다.
- `Player` 에 의해 생성된 인스턴스 객체 입장에서는 그 원형이 무엇인지 알 수 있는 수단이 된다. ( 인스턴스는 생성자의 prototype을 그대로 복제하므로)

### __**proto**__

```jsx
function Player() {}

const bohongu = new Player();

console.log(bohongu.__proto__.constructor); // Player
console.log(bohongu.constructor); // Player
```

- 새롭게 생성된 객체는 원본 객체와의 연결을 가지고 있다. 이 때 이 연결을 프로토타입 링크라고 한다.
- 이 링크가 담겨 있는 프로퍼티가 `__proto__`이다. 생략이 가능하다

> ECMAScript 명세에는 `__proto__` 프로퍼티가 아니라 **[[prototype]]**
이라는 명칭으로 정의되어 있다. `__proto__`는 옛날에 사용한 방식이고 현재는 브라우저들이 이 프로토타입 링크를 구현한 대상일 뿐이라고 한다. 많은 브라우저에서 사용하기 때문에 호환성 유지 차원에서 인정되었지만 ECMAScript 명세에는 `Object.getPrototypeOf()`를 통해 접근하는 것을 권장한다.
> 

### 프로토타입 체인

- `Object.prototype` 이 모든 객체들의 조상
- 어떤 데이터의 `__proto__`  프로퍼티 내부에서 다시 `__proto__` 프로퍼티가 연쇄적으로 이어진 것을 프로토타입 체인이라한다.
- 이 체인을 따라가며 검색하는 것을 프로토타입 체이닝이라고 한다.