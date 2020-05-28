import React from 'react';
import classes from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = "/messages/" + props.id;

    return (
        <div className={classes.dialogsItems}>
            <div>
                <NavLink to={path} activeClassName={classes.activeLink}>
                    <img className={classes.styleFriendAvatar} src={props.imgPath}/>
                </NavLink>
            </div>
            <div>
                <NavLink to={path} activeClassName={classes.activeLink} className={classes.styleFriendText}>
                    {props.name}
                </NavLink>
            </div>

        </div>
    );
}

export default DialogItem;