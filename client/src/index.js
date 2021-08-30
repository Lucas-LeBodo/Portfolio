import React,{ Fragment } from 'react';
import ReactDOM from 'react-dom';

// Import Client
import Client from './client.jsx';
import Body from './Components/Blocks/body.jsx'
// Import Style
import './Sass/style.scss';

ReactDOM.render(
    <Fragment>
        <Body />
        <Client />
    </Fragment>,
    document.getElementById('root')
);

