import React from 'react';
import {addPostAction, updatePostAction} from "../../../Redux/profileReducer";
import MyPost from "./MyPost";
import StoreContext from "../../../StoreContext";


const MyPostContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState()
                let addPost = () => {
                    store.dispatch(addPostAction())
                }

                let updatePost = (text) => {
                    store.dispatch(updatePostAction(text))
                }

                return (<MyPost addPost={addPost}
                                updatePost={updatePost}
                                postPage={state.postPage}/>)
            }
            }
        </StoreContext.Consumer>

    )
}

export default MyPostContainer