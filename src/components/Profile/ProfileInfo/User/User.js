import React from 'react';
import Classes from './User.module.css';
import Avatar from "../Avatar/Avatar";
import Description from "../Description/Description";

const User = (props) => {
    return (

        <div className={Classes.user}>
           <Avatar/>
           <Description quote={props.quote}/>
        </div>
    );
}

export default User;