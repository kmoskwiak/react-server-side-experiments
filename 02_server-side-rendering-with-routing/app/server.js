import express from 'express';
import path from 'path';
import React from 'react';

import page from './page';
import { createStore } from 'redux';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import AppRoutes from './routes';
import Reducer from './reducers';
import Helmet from 'react-helmet';

const app = express();

app.use('/static', express.static(path.resolve(__dirname, '../build')));

app.use('/', (req, res) => {
    const state = {
        title: 'Page title',
        text: 'Server side text'
    };
    const store = createStore(Reducer, state);
    const context = {};

    const html = renderToString(
        <StaticRouter location={req.url} context={context}>
            <Provider store={store}>
                <AppRoutes location={req.url} />
            </Provider>
        </StaticRouter>
    );
    const finalState = store.getState();
    const initial = JSON.stringify(finalState).replace(/</g, '\\u003c');
    const helmet = Helmet.renderStatic();

    return res.send(page(helmet, html, initial));
});


app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
