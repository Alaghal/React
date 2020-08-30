import {profileAPI, usersAPI} from "../api/api";
import {setProfilePage} from "./profileReducer";

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }

        default:
            return state;
    }

}

export const getUser = (userId) => {
    return (dispatch) => {
        usersAPI.getUser()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data;
                    dispatch(setAuthUserData(id, email, login));
                }
            })
    }
}

export const  setAuthUserData = (id, email, login)  => ({type: SET_USER_DATA, data: {id, email, login}})

export default authReducer;