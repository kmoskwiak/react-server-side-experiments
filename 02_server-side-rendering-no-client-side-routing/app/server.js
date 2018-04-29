import express from 'express';
import path from 'path';
import React from 'react';

import page from './page';
import { createStore } from 'redux';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import Reducer from './reducers';
import Helmet from 'react-helmet';

import About from './components/About';
import Home from './components/Home';

const modules = {
    'Home': Home,
    'About': About
};

const app = express();

app.use('/static', express.static(path.resolve(__dirname, '../build')));

app.use('/about', (req, res) => {
    const state = {
        title: 'About'
    };
    
    return render('About', state, res);
});

app.use('/', (req, res) => {
    const state = {
        title: 'Page title',
        text: 'Server side text'
    };
    return render('Home', state, res)
});


function render(currentModule, state, res) {
    const Module = modules[currentModule];
    const store = createStore(Reducer, state);
    const context = {};

    const html = renderToString(
        <Provider store={store}>
            <Module />
        </Provider>
    );
    const finalState = store.getState();
    const initial = JSON.stringify(finalState).replace(/</g, '\\u003c');
    const helmet = Helmet.renderStatic();

    return res.send(page(helmet, html, initial, JSON.stringify(currentModule)));
}

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
