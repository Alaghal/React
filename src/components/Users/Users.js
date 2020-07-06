import React from "react";
import User from "./User/User";
import classes from "./Users.module.css"
import * as axios from "axios";

const Users = (props) => {

    if (props.userPage.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then( response => {
            props.setUsers(response.data.items);
        })
    }

    let users = props.userPage.users.map(u => <User id={u.id} key={u.id} followed={u.followed} urlAvatar={u.photos.large}
                                                    name={u.name} status={u.status}
                                                    follow={props.follow} unFollow={props.unFollow}/>)
    return (
        <div>
            <h2>Users</h2>
            <div className={classes.wrapper}>
                {users}
            </div>
            <div className={classes.showMore}>
                <button>Show More</button>
            </div>

        </div>
    )
}

export default Users;