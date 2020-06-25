import React from 'react';
import classes from './Profile.module.css';
import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";

const Profile = (props) => {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPostContainer state={props.state} store={props.store}/>
        </div>);
}

export default Profile;