import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import navbarReducer from "./navbarReducer";
import profileReducer from "./profileReducer";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    navBarPage: navbarReducer,
    postPage: profileReducer
})

let store = createStore(reducers);

window.store = store;

export default store;