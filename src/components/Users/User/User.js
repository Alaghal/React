import React from "react";
import classes from './User.module.css'
import userPhoto from '../../../assets/image/user.png'
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const User = (props) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.avatar}>
                <NavLink to={'/profile/' + props.id}>
                    <img className={classes.img} src={props.urlAvatar != null ? props.urlAvatar : userPhoto}/>
                </NavLink>
            </div>
            <div className={classes.button}> {props.followed
                ? <button onClick={() => {

                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {
                        withCredentials: true,
                        headers: {
                            "API-KEY" : "0f23a133-f1e0-461c-8767-50ef7f7956e8"
                        }
                    })
                        .then(response => {
                            if (response.data.resultCode == 0) {
                                props.unFollow(props.id)
                            }
                        });


                }}>UnFollow</button>
                : <button onClick={() => {

                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {}, {
                        withCredentials: true,
                        headers: {
                            "API-KEY" : "0f23a133-f1e0-461c-8767-50ef7f7956e8"
                        }
                    })
                        .then(response => {
                            if (response.data.resultCode == 0) {
                                props.follow(props.id)
                            }
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