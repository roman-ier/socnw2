import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {HashRouter} from 'react-router-dom';
import store from './redux/redux-store';
import {Provider} from "react-redux";


ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App store={store}/>
        </Provider>
    </HashRouter>,
    document.getElementById('root'));

serviceWorker.unregister();
