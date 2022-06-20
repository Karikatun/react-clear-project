import React from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

import AppNavigation from 'components/navigation/AppNavigation';

import { store } from 'redux/store'

import 'App.css';

function App () {
  return (
    <Provider store={store}>
        <BrowserRouter>
          <AppNavigation></AppNavigation>
        </BrowserRouter>
    </Provider>
  );
}

export default App;
