import React from 'react';
import classes from './MyPost.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";



const MyPost = (props) => {

    let postMessages = props.postPage.messagesPost.map(m => <Post message={m.message} key={m.id} id={m.id}
                                                                  like={m.countLike}/>);

    let addPostChange = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={classes.postStyle}>
            <h2>MyPost</h2>
            <div>
                <AddPostFormRedux onSubmit={addPostChange}/>
            </div>
            <div>
                {postMessages}
            </div>
        </div>
    );
}

const addPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"textarea"} name={"newPostText"} placeholder={"Enter your text"}/>
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
};

const AddPostFormRedux = reduxForm({form: 'profileAddPostMessage'})(addPostForm);

export default MyPost;