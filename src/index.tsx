import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { loadDevTools } from 'jira-dev-tool'
import AppProvider from './context';

loadDevTools(() => {
    ReactDOM.render(
        <AppProvider>
            <App></App>
        </AppProvider>,
        document.getElementById('root'))
})