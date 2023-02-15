# Redux-saga

redux-saga의 경우엔, 액션을 모니터링하고 있다가, 특정 액션이 발생하면 이에 따라 특정 작업을 하는 방식으로 사용

redux-saga는 다양한 상황에 쓸 수 있는 만큼, 제공되는 기능도 많고, 사용방법도 진입장벽이 꽤나 큼

`$ yarn add redux react-redux redux-saga axios`

## 가상 로그인 구현

### modules/user/action.js

```jsx
// 액션 타입
export const LOGIN_REQUEST = "LOGIN_REQUSET";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

// 액션 생성함수 (시작지점인 REQUEST만 만들어주고 나머지는 saga에서 생성해서 안 만들어줘도 된다는데 알아봐야할 듯)
export const loginRequestAction = (data) => ({
  type: LOGIN_REQUEST,
  data,
});

```

### modules/user/reducer.js

```jsx
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actions";

// 초기값

const initialState = {
  user: {},
  loginLoading: false,
  loginDone: false,
  loginError: null,
};

// 리듀서
export default function user(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loginLoading: true,
        loginDone: false,
        loginError: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginLoading: false,
        loginDone: true,
        loginError: null,
        user: action.data,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loginLoading: false,
        loginError: action.error,
      };
    default:
      return state;
  }
}
```

### modules/user/sagas.js

```jsx
import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actions";

async function loginAPI(data) {
  // 로그인 api 호출
  return await axios.post("api/login", data);
}

function* login(action) {
  try {
    const response = yield call(loginAPI(action)); // call : 동기작업 호출, loginAPI(Promise) return 결과가 resolve면 loginSuccess, rejected면 loginFailure 실행
		// jwt 사용 시 accessToken을 받아 저장
    yield put({
      type: LOGIN_SUCCESS,
      data: response.data,
    }); // put : 특정 액션 디스패치 ( dispatch와 동일? 비슷한 기능)
    console.log("로그인 성공");
  } catch (error) {
    console.error(error);
    yield put({
      type: LOGIN_FAILURE,
      error: error.response.data,
    });
  }
}

function* watchLogin() {
  yield takeLatest(LOGIN_REQUEST, login);
  // takeLatest : 짧은 시간 안에 여러 번 들어오는 액션 중에 마지막 액션만 수행 (로그인 버튼을 막 눌렀을 때 마지막 한번만 누른걸로 인식)
  // takeEvery : 짧은 시간 안에 여러 번 들어오는 모든 액션 수행 (Increase 버튼을 막 눌렀을 때 모든 액션 처리)
}

export default function* userSaga() {
  yield all([fork(watchLogin)]);
  // all : 제너레이터 함수를 배열의 형태로 넣어주면 함수들이 병행적으로 동시 실행
  // fork : 비동기작업 호출 ( call과 반대 )
}
```

### modules/index.js

```jsx
import { combineReducers } from "redux";
import userSaga from "./user/sagas";
import { fork, all } from "redux-saga/effects";
import user from "./user/reducer";

const rootReducer = combineReducers({
  user,
});

export function* rootSaga() {
  yield all([fork(userSaga)]);
}

export default rootReducer;
```

### index.js

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer, { rootSaga } from "./modules/index";
import { applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

const root = ReactDOM.createRoot(document.getElementById("root"));

const sagaMiddleware = createSagaMiddleware(); // 사가 미들웨어 만들기

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware)); // 사가 미들웨어 적용

sagaMiddleware.run(rootSaga); // 루트 사가 실행, 스토어 생성이 된 후 실행

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

---