import React from 'react';
import { hydrate } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Reducer from './reducers';
import componets from './components';

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;
const store = createStore(Reducer, preloadedState);

const currentModule = window.__CURRENT_MODULE__;

const Module = componets[currentModule];

hydrate(
    <Provider store={store}>
        <Module />
    </Provider>
    , document.getElementById('app'));