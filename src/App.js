import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import DataComponent from './view/DataComponent';
import MainLayout from './view/layout/MainLayout';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
function App() {
  return (
    <Provider store={store}>
      <MainLayout/>
    </Provider>
  );
}

export default App;
