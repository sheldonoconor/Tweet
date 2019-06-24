import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {TwitterService} from './services/TwitterService';
import Twitter from 'twitter';

const client = new Twitter({
    consumer_key: 'RlAKzmI0qPHpX5WE1Pfa321jZ',
    consumer_secret: 'hbyjPejGsbQI15A8PjeZFxd5RvqjfWpClOWAZA2E3dVyXG4jVU',
    access_token_key: '411812858-w0PZ8s9AUaRckHhQe16z3p1uBdGV6X0LDoFEApVx',
    access_token_secret: 'eIDexgo8azdk3RhxWftjcdho0HBWgNnrxr7dtiorFcMir'
});

const twitterService = new TwitterService(client);

ReactDOM.render(<App search={twitterService.search}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
