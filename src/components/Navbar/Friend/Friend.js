import React from 'react';
import classes from './Friend.module.css';
import {NavLink} from "react-router-dom";

const Friend = (props) => {
    let pathToFriend = "/id="+props.id
    return (
        <div className={classes.photoFriend}><NavLink to={pathToFriend} >  <img className={classes.photoFriend} src={props.imgUrl}/> </NavLink></div>
    );
}

export default Friend;