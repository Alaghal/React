import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";


let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    postPage: profileReducer,
    userPage: usersReducer
})

let store = createStore(reducers);

window.store = store;

export default store;