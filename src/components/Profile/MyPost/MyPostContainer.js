import React from 'react';
import {addPostAction, updatePostAction} from "../../../Redux/profileReducer";
import MyPost from "./MyPost";

const MyPostContainer = (props) => {

    let addPost = () => {
        props.dispatch(addPostAction());
    }

    let updatePost = (text) => {
        props.dispatch(updatePostAction(text));
    }

    return (
            <MyPost addPost={addPost} updatePost={updatePost} postPage={props.postPage} />
        )
}

export default MyPostContainer