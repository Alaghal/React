import React from 'react';
import classes from './Profile.module.css';
import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPost postPage={props.postPage} dispatch={props.dispatch}/>
        </div>);
}

export default Profile;