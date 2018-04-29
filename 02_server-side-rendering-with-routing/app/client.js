import React from 'react';
import { hydrate } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import AppRoutes from './routes';
import Reducer from './reducers';

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;
const store = createStore(Reducer, preloadedState);

hydrate(
    <Provider store={store}>
        <BrowserRouter>
          <AppRoutes />
      </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);