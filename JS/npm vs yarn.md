# npm vs yarn

npm과 yarn은 자바스크립트 런타임 환경(Node.js)의 패키지 관리자이다. 

- 패키지 : npm에 업로드된 노드 모듈

npm이 없었을 때에는 필요로 하는 기능을 직접 작성하구나 github를 통해 다운로드하여 사용했음

Node.js를 설치하기만 하면 명령어 한 줄로 기능의 추가, 삭제 등이 가능

## npm

- Node.js 런타임을 설치하면 무조건 딸려오는 기본 패키지 매니저

## yarn

- 페이스북에서 만든 자바스크립트 패키지 매니저
- npm과 같은 기능을 수행
- npm의 단점을 향상시키기 위해 만들어진 매니저 툴

### 속도

**npm**은 패키지를 한 번에 하나씩 순차적으로 설치하고 **yarn**은 여러 패키지를 동시에 가져오고 설치하도록 최적화 되어 있어서 패키지 설치 속도 측면에서 yarn이 **npm**보다 빠르다. 하지만 거듭된 업데이트로 **yarn**이 근소하게 빠르긴 하지만 이제 거의 차이가 없다고 볼 수 있다

### 보안

**yarn**은 보안 측면에서 **npm**보다 안전한 것으로 알려져 있다. **npm**은 자동으로 패키지에 포함된 다른 패키지 코드를 실행한다. 편리하지만 안정성을 위협할 수 있다.

**yarn**은 yarn.lock or package.json 파일에 있는 파일만을 설치한다. yarn.lock은 보든 디바이스에 같은 패키지를 설치하는 것을 보장하기 때문에 버전 차이로 인해 생기는 버그를 방지할 수 있다.

현재는 **npm**의 보안도 크게 향상 되었다.

### 중복사용 X

**npm**과 **yarn**은 패키지 관리 방식이 다르기 때문에 충돌이 날 수 있으므로 혼용하지 않는 게 좋다

lock 파일은 둘 다 있어도 상관은 없지만 `npm install` 이던 `yarn add` 이던 한 번 시작하면 끝까지 하나만 사용하는 게