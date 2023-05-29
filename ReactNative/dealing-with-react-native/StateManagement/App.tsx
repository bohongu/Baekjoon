import React from 'react';
import {Provider} from 'react-redux';
import rootReducer from './slices';
import {createStore} from 'redux';
import AuthApp from './components/AuthApp';

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <AuthApp />
    </Provider>
  );
}

export default App;
