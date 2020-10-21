import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import authReducer from "./AuthReducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from  "redux-form"


let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    postPage: profileReducer,
    userPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;