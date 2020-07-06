import React from "react";
import classes from './User.module.css'
import userPhoto from '../../../assets/image/user.png'

const User = (props) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.avatar}><img className={classes.img} src={props.urlAvatar != null ? props.urlAvatar : userPhoto }/></div>
            <div className={classes.button}> {props.followed ? <button onClick={ ()=>{props.unFollow(props.id)} }>UnFollow</button> : <button onClick={ () => { props.follow(props.id)}}>Follow</button> } </div>
            <div className={classes.name}><span>{props.name}</span></div>
            <div className={classes.status}><span>{props.status}</span></div>
            <div className={classes.country}><span>Russia</span></div>
            <div className={classes.city}><span>Moscow</span></div>
        </div>
    )
}

export default User;