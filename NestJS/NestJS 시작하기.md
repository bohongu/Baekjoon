# NestJS 시작하기

## NestJS CLI 설치 & 프로젝트 생성

```
$ npm i -g @nestjs/cli
```

```
$ nest new project-name
```

## 파일구조

- **eslintrc.js** : 개발자들이 특정한 규칙을 가지고 코드를 깔끔하게 짤 수 있게 도와주는 라이브러리, 타입스크립트를 쓰는 가이드 라인 제시, 문법에 오류가 나면 알려주는 역할 등등
- **prettierrc** : 주로 코드 형식을 맞추는데 사용. 작은따옴표(’’)를 사용할지 큰따옴표(””)를 사용할지, indent값을 2줄로 줄지 4줄로 줄지 등등, 에러 찾는 것이 아닌 코드 포맷터 역할
- **nest-cli.json** : nest 프로젝트를 위해 특정한 설정을 할 수 있는 json 파일
- **tsconfig.json** : 어떻게 타입스크립트를 컴파일 할지 설정
- **tsconfig.build.json** : tsconfig.json의 연장선상 파일이며, build를 할 때 필요한 설정들”excludes”에서는 빌드할 때 필요 없는 파일들 명시
- **package.json**
    - build : 운영환경을 위한 빌드
    - format : 린트에러가 났을 시 수정
    - start : 앱 수정
- **src** 폴더( 대부분의 비즈니스 로직이 들어가는 곳 ) :
    - main.ts : 앱을 생성하고 실행
    - app.module.ts : 앱 모듈을 정의

## 로직 흐름

1. Client : 엔드 포인트 ( localhost:3000/, GET ) Request
2. Controller : 같은 엔드 포인트를 가지고 있는 핸들러가 리턴하는 Service → Client에게 Response
3. Service : Controller에서 리턴하는 같은 Service 로직 수행 후 Controller

진입점 ( app.module.ts ) → .controller.ts → .service.ts( DB 작업, 연산 )

## NestJS 모듈

- @Module () 데코레이터로 주석이 달린 클래스
- 프로그램에는 하나 이상의 모듈 (루트 모듈)이 있다.
- 모듈은 밀접하게 관련된 기능 집합으로 구성 요소를 구성하는 효과적인 방법 ( 유저 모듈, 주문 모듈, 게시물 모듈… )
- 모듈은 기본적으로 싱글 톤이므로 여러 모듈 간에 쉽게 공급자의 동일한 인스턴스를 공유할 수 있다.

### 모듈 생성

```
$ nest g module module-name
```

## Controller

- 들어오는 요청을 처리하고 클라이언트에 응답을 반환
- @Controller 데코레이터로 클래스를 데코레이션하여 정의
- 데코레이터는 인자를 Controller에 의해서 처리되는 “경로”를 받음
    - @Controller(’boards’)

### Handler

- @Get, @Post, @Delete 등과 같이 데코레이터로 장식 된 컨트롤러 클래스 내의 단순한 메서드

### Controller 생성

```
$ nest g controller module-name --no-spec( 테스트를 위한 소스 코드 생성 )
```

## Provider

- nest의 기본개념
- 대부분의 기본 nest 클래스는 서비스, 리포지토리, 팩토리, 헬퍼 등 Provider로 취급
- Provider의 주요 아이디어는 종속성으로 주입할 수 있다는 것, 즉 객체는 서로 다양한 관계를 만들 수 있으며 객체의 인스턴스를 연결하는 기능은 대부분 nest 런타임 시스템에 위임될 수 있다.

### Provider 등록하기

- module 파일에 providers 항목 안에 해당 모듈에서 사용하고자 하는 Provider을 넣어주면 된다.

## Service

- @Injectable 데코레이터로 감싸져서 모듈에 제공되며, 이 서비스 인스턴스는 애플리케이션 전체에서 사용 될 수 있다
- 컨트롤러에서 데이터의 유효성을 체크를 하거나 데이터베이스에 아이템을 생성하는 등의 작업을 하는 부분을 처리한다.

### Service 생성하기

```
$ nest g service service-name --no-spec( 테스트를 위한 소스 코드 생성 )
```

## Service를 Controller에서 이용할 수 있게 해주기 (Dependency Injection)

- nest에서 DI는 클래스의 Constructor안에서 이루어 진다

```tsx
@Controller('boards')
export class BoardsController {
  boardsService: BoardsService;

  constructor(boardsService: BoardsService) {
    this.boardsService = boardsService;
  }

	@Get()
	  getAllTask() : Board[] {
	    return this.boardsService.getAllBoards();
	  }
}
```

1. boardsService 파라미터에 BoardsService 객체를 타입으로 지정
2. 이 boardsService 파라미터를 BoardsController 클래스 안에서 사용하기 위해서 this.boardsService 프로퍼티에 boardsService 파라미터를 할당해준다.
3. 하지만 타입스크립트에서는 선언한 값만 객체의 프로퍼티로 사용가능하기 때문에 위에 boardsService:BoardsService로 선언해준다.
4. 이렇게 갖게된 boardsService 프로퍼티를 이용해서 BoardsController 클래스안에서 활용할 수가 있다.

### 접근 제한자를 이용해서 소스 간단하게 하기

- 접근 제한자를 생성자 파라미터에 선언하면 접근 제한자가 사용된 생성자 파라미터는 암묵적으로 클래스 프로퍼티로 선언됨
- Private이 선언되었기 때문에 boardsService 프로퍼티는 BoardsController 클래스 내부에서만 사용가능

```tsx
@Controller('boards')
export class BoardsController {
	constructor(private boardsService: BoardsService) {}
	
	getAllTask() {
		this.boardsService
	}
}
```