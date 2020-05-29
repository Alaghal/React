import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from '../src/Redux/state'
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";


let renderBrowserTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)} />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

renderBrowserTree(store.getState());

store.subscriber(renderBrowserTree)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();