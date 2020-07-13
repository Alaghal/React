import React from 'react';
import Classes from './User.module.css';
import Avatar from "../Avatar/Avatar";
import Description from "../Description/Description";

const User = (props) => {
    debugger;
    return (
        <div className={Classes.user}>
           <Avatar img={props.profile.photos.large} />
           <Description quote={props.profile.aboutMe}/>
        </div>
    );
}

export default User;