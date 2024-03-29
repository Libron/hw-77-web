import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './store/reducer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

const app = (
    <Provider store={store}>
            <App/>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();