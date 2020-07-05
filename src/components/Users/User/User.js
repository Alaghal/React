import React from "react";
import classes from './User.module.css'

const User = (props) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.avatar}><img className={classes.img} src={props.urlAvatar}/></div>
            <div className={classes.button}> {props.followed ? <button onClick={ ()=>{props.unFollow(props.id)} }>UnFollow</button> : <button onClick={ () => { props.follow(props.id)}}>Follow</button> } </div>
            <div className={classes.name}><span>{props.name}</span></div>
            <div className={classes.status}><span>{props.status}</span></div>
            <div className={classes.country}><span>{props.location.country}</span></div>
            <div className={classes.city}><span>{props.location.city}</span></div>
        </div>
    )
}

export default User;