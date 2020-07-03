import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './Redux/storeRedux'
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import StoreContext from "./StoreContext";
import {Provider} from "react-redux";


let renderBrowserTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

renderBrowserTree(store.getState());

store.subscribe(() => {
        let state = store.getState();
        renderBrowserTree(state);
    }
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
