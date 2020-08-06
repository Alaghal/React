import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";

const Profile = (props) => {
    return (
        <div className={classes.content}>
            <ProfileInfo profile={props.profile}/>
            <MyPostContainer />
        </div>);
}

export default Profile;