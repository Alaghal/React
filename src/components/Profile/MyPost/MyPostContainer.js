import React from 'react';
import {addPostAction, updatePostAction} from "../../../Redux/profileReducer";
import MyPost from "./MyPost";

const MyPostContainer = (props) => {

    let addPost = () => {
        props.store.dispatch(addPostAction());
    }

    let updatePost = (text) => {
        props.store.dispatch(updatePostAction(text));
    }

    return (
            <MyPost addPost={addPost} updatePost={updatePost} postPage={props.state.postPage} />
        )
}

export default MyPostContainer