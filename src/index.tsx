import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { loadDevTools } from 'jira-dev-tool'

loadDevTools(() => {
    ReactDOM.render(<App></App>, document.getElementById('root'))
})