import {profileAPI, usersAPI} from "../api/api";
import {toggleFollowingInProgress, unFollowSuccess} from "./usersReducer";

const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST-NEW-TEXT';
const SET_PROFILE_USER = 'SET_PROFILE_USER';
const SET_USER_STATUS = 'SET_USER_STATUS'

let initialState = {
    messagesPost: [
        {id: "1", message: "Message 1", countLike: "12"},
        {id: "2", message: "Message 2", countLike: "10"},
        {id: "3", message: "Message 3", countLike: "15"},
        {id: "4", message: "Message 4", countLike: "17"},
    ],
    newPostText: 'it',
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                messagesPost: [...state.messagesPost, { id: "5",
                    message: state.newPostText,
                    countLike: "0"} ],
                newPostText: ''
            }
        }
        case  UPDATE_POST: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_PROFILE_USER: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }

}

export const addPost = () => ({type: ADD_POST});

export const updatePost = (text) => ({type: UPDATE_POST, newText: text});

export const setProfilePage = (profile) => ({type:SET_PROFILE_USER, profile:profile});

export const setUserStatus = (status) => ({type:SET_USER_STATUS, status})

export const getUserStatus = (userID) => (dispatch) => {
    profileAPI.getUserStatus(userID)
        .then(data => {
            dispatch (setUserStatus(data))
        } )
}

export const updateUserStatus = (status) => (dispatch) => {
    profileAPI.updateUserStatus(status)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserStatus(data))
            }
        } )
}

export const getProfile = (userId) => {
    return  (dispatch) => {
        if (!userId) {
            userId = 2;
        }
        profileAPI.getProfile(userId)
            .then(data => {
                dispatch(setProfilePage(data));
            })
    }
}

export default profileReducer;