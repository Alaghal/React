import React from 'react';
import classes from './MyPost.module.css';
import Post from "./Post/Post";


const MyPost = (props) => {

    let postMessages = props.postPage.messagesPost.map(m => <Post message={m.message} like={m.countLike}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let updatePost = () => {
        let text = newPostElement.current.value;
        props.updatePost(text);
    }

    return (
        <div className={classes.postStyle}>
            <h2>MyPost</h2>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={updatePost} value={props.postPage.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div>
                {postMessages}
            </div>
        </div>
    );
}

export default MyPost;