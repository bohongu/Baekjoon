# TypeORM

- node.js에서 실행되고 TypeScript로 작성된 객체 관계형 매퍼 라이브러리

### ORM

- 객체와 관계형 데이터베이스의 데이터를 자동으로 변형 및 연결하는 작업
- ORM을 이용한 개발은 객체와 데이터베이스의 변형에 유연하게 사용할 수 있다.

### TypeORM vs Vanilla Javascript

```tsx
const boards = Board.find({title:"Hello", status:"PUBLIC"})
```

```jsx
db.query(
  'SELECT * FROM boards WHERE title = "Hello" AND status = "PUBLIC"',
  (err, result) => {
    if (err) {
      throw new Error('error');
    }
    boards = result.rows;
  },
);
```

### TypeORM 특징과 이점

- 모델을 기반으로 데이터베이스 테이블 체계를 자동으로 생성
- 데이터베이스에 개체를 쉽게 삽입, 업데이트, 삭제를 할 수 있다.
- 테이블 간의 매핑(일대일, 일대 다, 다대 다)을 만든다.
- 간단한 CLI 명령을 제공
- TypeORM은 간단한 코딩으로 ORM 프레임워크를 사용하기 쉽다
- typeORM은 다른 모듈과 쉽게 통합된다