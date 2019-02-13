import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import App from "./App";
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";
import {createStore} from 'redux';
import reducer from './reducers/reducer';
import Login from './components/Login/Login';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter baseUrl="/">
            <App/>
        </BrowserRouter>
    </Provider>
, document.getElementById('head'));


serviceWorker.unregister();
