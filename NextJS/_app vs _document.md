# _app vs _document

- 페이지에 공통적으로 적용될 내용을 작성하는 공간

## _app.tsx

- 서버로 요청이 들어왔을 때 **가장 먼저 실행되는 컴포넌트**
- 페이지에 적용할 **공통 레이아웃**의 역할

```tsx
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
```

### 주요 사용 목적

- Global CSS
- Redux Provider

## _document.tsx

- `_app.tsx` 다음에 실행되며, 공통적으로 활용할 `<head>` 나 `<body>` 태그 안에 들어갈 내용들을 커스텀할 때 활용
- Document클래스를 상속받는 클래스 컴포넌트로 작성
- `<Html>` ,`<Head>` ,`<Main>` , `<NextScript>` 를 꼭 리턴해줘야한다.

```tsx
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
```

### 주요 사용 목적

- 폰트 임포트
- charset, 웹 접근성 관련 태그 설정