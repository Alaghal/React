import React from 'react';
import {addPost, updatePost} from "../../../Redux/profileReducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        postPage: state.postPage,
        newPostText: state.newPostText
    }
}


const MyPostContainer = connect(mapStateToProps, {addPost,updatePost})(MyPost);

export default MyPostContainer