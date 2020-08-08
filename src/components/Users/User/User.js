import React from "react";
import classes from './User.module.css'
import userPhoto from '../../../assets/image/user.png'
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../../api/api";

const User = (props) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.avatar}>
                <NavLink to={'/profile/' + props.id}>
                    <img className={classes.img} src={props.urlAvatar != null ? props.urlAvatar : userPhoto}/>
                </NavLink>
            </div>
            <div className={classes.button}> {props.followed
                ? <button disabled={props.followingInProgress.some(id => id === props.id)} onClick={() => {
                    props.toggleFollowingInProgress(true, props.id);
                    usersAPI.unFollow(props.id)
                        .then(data => {
                            if (data.resultCode == 0) {
                                props.unFollow(props.id)
                            }
                            props.toggleFollowingInProgress(false,props.id);
                        });
                }}>UnFollow</button>
                : <button disabled={props.followingInProgress.some(id => id === props.id)} onClick={() => {
                    props.toggleFollowingInProgress(true,props.id);
                    usersAPI.follow(props.id)
                        .then(data => {
                            if (data.resultCode == 0) {
                                props.follow(props.id)
                            }
                            props.toggleFollowingInProgress(false,props.id);
                        });
                }}>Follow</button>}
            </div>
            <div className={classes.name}><span>{props.name}</span></div>
            <div className={classes.status}><span>{props.status}</span></div>
            <div className={classes.country}><span>Russia</span></div>
            <div className={classes.city}><span>Moscow</span></div>
        </div>
    )
}

export default User;