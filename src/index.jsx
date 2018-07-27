'use strict';

import App from './app.jsx';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

const renderApp = (NextApp) => {
    render(
        <AppContainer>
            <NextApp />
        </AppContainer>,
        document.querySelector('[data-js="app"]')
    );
};

renderApp(App);

if (module.hot) {
    module.hot.accept('./app.jsx', () => {
        const NextApp = require('./app.jsx').default;
        renderApp(NextApp);
    });
}
