import React from 'react';
import ReactDOM from 'react-dom';
const rootElement = document.getElementById('root');
export const renderApp = (AppComponent) => {
	ReactDOM.render(<AppComponent />, rootElement);
};
