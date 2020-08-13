import {profileAPI, usersAPI} from "../api/api";
import {toggleFollowingInProgress, unFollowSuccess} from "./usersReducer";

const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST-NEW-TEXT';
const SET_PROFILE_USER = 'SET_PROFILE_USER';

let initialState = {
    messagesPost: [
        {id: "1", message: "Message 1", countLike: "12"},
        {id: "2", message: "Message 2", countLike: "10"},
        {id: "3", message: "Message 3", countLike: "15"},
        {id: "4", message: "Message 4", countLike: "17"},
    ],
    newPostText: 'it',
    profile: null
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
        default:
            return state;
    }

}

export const addPost = () => ({type: ADD_POST});

export const updatePost = (text) => ({type: UPDATE_POST, newText: text});

export const setProfilePage = (profile) => ({type:SET_PROFILE_USER, profile:profile})

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