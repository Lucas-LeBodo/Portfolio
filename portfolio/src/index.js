import React from 'react';
import ReactDOM from 'react-dom';

import Router from './Router/router';
import './Styles/style.scss';

ReactDOM.render(
    <React.StrictMode>
      <Router/>
    </React.StrictMode>,
    document.getElementById('root')
);