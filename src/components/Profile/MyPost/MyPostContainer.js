import React from 'react';
import MyPost from "./MyPost";
import {connect} from "react-redux";
import {addPost} from "../../../Redux/profileReducer";


let mapStateToProps = (state) => {
    return {
        postPage: state.postPage
    }
}

let mapDispatchToProps = (dispatch) =>{
    return {
        addPost: (newPostText) => {
            dispatch(addPost(newPostText))
        }
    }
}


const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer