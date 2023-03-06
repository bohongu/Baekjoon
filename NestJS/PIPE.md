# PIPE

- @Injectable() 데코레이터로 주석이 달린 클래스
- Data transformation과 Data validation 을 위해 사용.
- 컨트롤러 경로 처리기에 의해 처리되는 인수에 대해 작동

### Data transformation

- 입력 데이터를 원하는 형식으로 변환 ( String to Integer )
- 숫자를 받길 원하는데 문자열 형식으로 온다면 파이프에서 자동으로 형변환을 해줌

### Data Validation

- 입력 데이터를 평가하고 유효한 경우 메서드에 전달, 그렇지 않으면 예외를 발생시킴

## PIPE 사용하는 법(Binding Pipes)

- Handler-level Pipes
- Parameter-level Pipes
- Global-level Pipes

### Handler-level Pipes

- 핸들러 레벌에서 @UsePipes() 데코레이터를 이용해서 사용
- 모든 파라미터에서 적용
  ![code1](https://user-images.githubusercontent.com/91203029/222998664-bea36975-5cfd-4576-9d90-15d9529b3a1a.png)

### Parameter-level Pipes

- 특정한 파라미터에게만 적용되는 파이프
  ![code2](https://user-images.githubusercontent.com/91203029/222998667-7722242f-0949-493c-8fe5-0e39c6b6588a.png)

### Global-level Pipes

- 클라이언트에서 들어오는 모든 요청에 적용
- 가장 상단 영역인 main.ts에 넣어준다
  ![code3](https://user-images.githubusercontent.com/91203029/222998669-32f88242-9be0-42e4-97ee-1be4e70088aa.png)

## Built-in Pipes

### NestJS 에서 기본적으로 제공하는 6가지 파이프

- Validation Pipe
- ParseIntPipe
- ParseBoolPipe
- ParseArrayPipe
- ParseUUIDPipe
- DefaultValuePipe

## PIPE 생성하기

### 모듈 설치

```
$ yarn add class-validator class-transformer
```

**create-board.dto.ts**

```tsx
import { IsNotEmpty } from "class-validator";

export class CreateBoardDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
```

**boards.controller.ts**

```tsx
@Post()
  @UsePipes(ValidationPipe)
  createBoard(@Body() createBoardDto: CreateBoardDto): Board {
    return this.boardsService.createBoard(createBoardDto);
  }
```

## 커스텀 파이프 구현하기

- `PipeTransform` 인터페이스를 새롭게 만들 커스텀 파이프에 구현한다.

### transform()

- 첫번째 파라미터 : 처리가 된 인자의 값(value)
- 두번째 파라미터 : 인자에 대한 메타 데이터를 포함한 객체
- return된 값은 핸들러로 전달되고 예외가 발생하면 클라이언트에 바로 전해짐

```tsx
import { ArgumentMetadata, PipeTransform } from "@nestjs/common";

export class BoardStatusValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {}
}
```
