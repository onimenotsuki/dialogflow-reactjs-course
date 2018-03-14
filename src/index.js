/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';

/* UIkit framework stylesheets and scripts */
import 'uikit/dist/css/uikit.css';
import 'uikit/dist/js/uikit.js';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
