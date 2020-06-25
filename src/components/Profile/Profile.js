import React from 'react';
import classes from './Profile.module.css';
import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";

const Profile = (props) => {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPostContainer postPage={props.postPage} dispatch={props.dispatch}/>
        </div>);
}

export default Profile;