import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const Root = createRoot(document.getElementById('root'));

Root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);