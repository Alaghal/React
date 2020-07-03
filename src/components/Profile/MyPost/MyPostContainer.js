import React from 'react';
import {addPostAction, updatePostAction} from "../../../Redux/profileReducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        postPage: state.postPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostAction())
        },
        updatePost: (text) => {
            dispatch(updatePostAction(text))
        }
    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer