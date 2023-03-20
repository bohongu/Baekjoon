# NextJS 프로젝트 생성하기

## 1. CNA

```
yarn create next-app
```

<p align="center">
<img src='https://user-images.githubusercontent.com/91203029/226274821-c69b9f30-1242-43e3-8610-012e776a14f8.png' />
</p>

1. 프로젝트 이름
2. TypeScript 사용 여부
3. ESLint 사용 여부
4. src/ 디렉토리 사용 여부
5. app/ 디렉토리 사용 여부

## 2. ESLint + Prettier

```
yarn add -D eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

- **.eslintr.json**

```json
{
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["@typescript-eslint"],
  "extends": [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@next/next/recommended",
    "next/core-web-vitals",
    "prettier"
  ],
  "rules": {
    "prettier/prettier": [
      "error",
      { "endOfLine": "auto" },
      { "usePrettierrc": true }
    ],
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/display-name": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/explicit-module-boundary-types": "off"
  }
}
```

- **prettierrc**

```json
{
  "trailingComma": "all",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true,
  "printWidth": 80
}
```

## 3. next.config.js

```jsx
/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  compiler: {
    emotion: true,
    removeConsole: process.env.NODE_ENV === "production",
  },
};

module.exports = nextConfig;
```

- swc 사용
- emotion 사용

## 4. 절대경로

- **tsconfig.json**

```
{
  "compilerOptions": {
    ...
    "incremental": true,
    "baseUrl": ".",
    "paths": {
      "@src/*": ["src/*"]
    }
  }
}
```

## 5. emotion

```
yarn add @emotion/react @emotion/styled emotion-reset
```

### Babel 사용 시 ( .babelrc )

```json
{
  "presets": [
    [
      "next/babel",
      {
        "preset-react": {
          "runtime": "automatic",
          "importSource": "@emotion/react"
        }
      }
    ]
  ],
  "plugins": ["@emotion/babel-plugin"]
}
```

### SWC 사용 시 ( next.config.js 세팅 )

### src/styles/emotion.d.ts

```tsx
// 주어진 테마에 맞춘 타입 추가

import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    back: string;
  }
}
```

### src/styles/globalStyle.ts

```tsx
// Glbal 스타일 지정

import { css } from "@emotion/react";
import emotionReset from "emotion-reset";

export const global = css`
  ${emotionReset}
`;
```

### src/styles/theme.ts

```tsx
// Theme 설정

import { Theme } from "@emotion/react";

export const darkTheme: Theme = {
  back: "yellow",
};

export const lightTheme: Theme = {
  back: "red",
};
```

### pages/\_app.tsx

```tsx
import { Global, ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import { useState } from "react";
import { global } from "src/styles/globalStyle";
import { darkTheme, lightTheme } from "./../src/styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  const [light, setLight] = useState(false);

  return (
    <>
      <ThemeProvider theme={light ? darkTheme : lightTheme}>
        <Global styles={global} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

// Theme, GlobalStyle 세팅
```

## 5. Recoil

### pages/\_app.tsx

```
yarn add recoil
```

```tsx
import { Global, ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import { useState } from "react";
import { global } from "src/styles/globalStyle";
import { darkTheme, lightTheme } from "./../src/styles/theme";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  const [light, setLight] = useState(false);

  return (
    <RecoilRoot>
      <ThemeProvider theme={light ? darkTheme : lightTheme}>
        <Global styles={global} />
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  );
}
```

### src/atoms/mode.ts

```tsx
import { atom } from "recoil";

export const modeAtom = atom<boolean>({
  key: "modeAtom",
  default: false,
});
```

## 6. React-Query

```
yarn add @tanstack/react-query
```

### pages/\_app.tsx

```tsx
import React from "react";
import { Global } from "@emotion/react";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { global } from "src/styles/globalStyle";
import { ThemeProvider } from "./../src/styles/themeProvider";

export default function App({ Component, pageProps }: AppProps) {
  // 서로 다른 사용자와 요청 사이에 데이터가 공유되지 않는다.
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider>
            <Global styles={global} />
            <Component {...pageProps} />
          </ThemeProvider>
        </Hydrate>
      </QueryClientProvider>
    </RecoilRoot>
  );
}
```

[React Query 공식 문서 중 SSR 페이지](https://tanstack.com/query/v4/docs/react/guides/ssr)

## Recoil로 Theme 관리하기

### src/styles/themeProvider.tsx

```tsx
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { useRecoilValue } from "recoil";
import { modeAtom } from "./../atoms/mode";
import { darkTheme, lightTheme } from "./theme";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const light = useRecoilValue(modeAtom);

  return (
    <EmotionThemeProvider theme={light ? darkTheme : lightTheme}>
      {children}
    </EmotionThemeProvider>
  );
}
```

### pages/\_app.tsx

```tsx
import React from "react";
import { Global } from "@emotion/react";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { global } from "src/styles/globalStyle";
import { ThemeProvider } from "./../src/styles/themeProvider";

export default function App({ Component, pageProps }: AppProps) {
  // 서로 다른 사용자와 요청 사이에 데이터가 공유되지 않는다.
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider>
            <Global styles={global} />
            <Component {...pageProps} />
          </ThemeProvider>
        </Hydrate>
      </QueryClientProvider>
    </RecoilRoot>
  );
}
```
