# CORS (Cross-Origin Resource Sharing)

## 요청 방식에 따른 CORS 발생 여부

### <img>, <video>, <script>, <link> 태그 등

→ Cross-origin 정책을 지원함

- `<link>` 태그의 `href` 에서 다른 사이트의 .css 리소스에 접근하는 것이 가능
- `<img>` 태그의 `src` 에서 다른 사이트의 .png, .jpg 등의 리소스에 접근하는 것이 가능
- `<script>` 태그의 `src` 에서 다른 사이트의 .js 리소스에 접근하는 것이 가능

### XMLHttpRequest, Fetch API 스크립트

→ Same-Origin 정책을 따름

- 다른 도메인의 소스에 대해 자바스크립트 ajax 요청 API 호출 시
- 웹 폰트 CSS 파일 내 @font-face에서 다른 도메인의 폰트 사용 시

자바스크립트에서의 요청은 기본적으로 **서로 다른 도메인에 대한 요청을 보안상 제한**

## CORS ( 교차 출처 리소스 공유 정책 )

### 출처(Origin)

URL은 Protocol, Host, Port, Path, Query String, Fragment로 이루어져 있다.

- Origin : Protocol + Host + Port

### 동일 출처 정책 : SOP(Same-Origin Policy)

- 동일한 출처에서만 리소스를 공유할 수 있다.
- 동일 출처 서버에 있는 리소스는 자유로이 가져올 수 있지만, 다른 출처 서버에 있는 이미지나 유튜브 영상 같은 리소스는 상호작용이 불가능하다

**동일 출처 정책이 필요한 이유**

- 출처가 다른 두 어플리케이션이 자유로이 소통할 수 있는 환경은 꽤 위험하다. 만일 제약이 없다면 해커가 CSRF, XSS 등의 방법을 이용해서 개인 정보를 가로챌 수 있다.
- 악의적인 상황을 방지하기 위해 SOP 정책으로 동일하지 않은 다른 출처의 스크립트가 실행되지 않도록 브라우저에서 사전에 방지한 것

**출처 구분 기준**

- 출처(Origin) = Protocol + Host + Port 3가지만 동일하다면 동을 출처로 판단

### 교차 출처 리소스 공유 : CORS( Cross-Origin Resource Sharing )

- 다른 출처의 리소스 공유에 대한 허용/비허용 정책
- 예외 사항(다른 출처 간의 리소스 사용)을 두기 위해 CORS 정책을 허용하는 리소스에 한해 다른 출처라도 받아들인다.
- **SOP 정책을 위반해도 CORS 정책에 따르면 다른 출처의 리소스라도 혀용**

### 브라우저의 CORS 기본 동작

1. 클라이언트에서 HTTP 요청의 헤더에 Origin을 담아 전달
2. 서버는 응답헤더에 Access-Control-Allow-Origin을 담어 클라이언트로 전달
3. 클라이언트에서 Origin과 서버가 보내준 Access-Control-Allow-Origin을 비교한다
    1. 클라이언트의 Origin과 Access-Controll-Allow-Origin이 다르면 CORS에러
    2. 같으면 리소스를 문제없이 가져오게 된다.
    - 서버에서 Access-Control-Allow-Origin 헤더에 허용할 출처를 기재해서 클라이언트에 응답하면 되는 것 (백엔드의 역할) → 클라이언트 (프론트) 에서 미리 자바스크립트로 origin 헤더 값을 위조하면 되지 않을까 싶지만, 브라우저서 이를 감지하여 차단.

### 해결방법

1. Chrome 확장 프로그램
2. 프록시 사이트( 모든 출처를 허용한 서버 대리점 ) 이용 → 악용 사례 때문에 api 요청 제한을 둠
3. 서버에서 Access-Control-Allow-Origin 헤더 세팅