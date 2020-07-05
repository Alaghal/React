import React from "react";
import User from "./User/User";
import classes from "./Users.module.css"

const Users = (props) => {
    let users = props.userPage.users.map(u => <User id={u.id} key={u.id} followed={u.followed} urlAvatar={u.photoUser} name={u.name} status={u.status} location={u.location} follow={props.follow} unFollow={props.unFollow} />)
    return (
        <div>
            <h2>Users</h2>
            <div  className={classes.wrapper}>
                {users}
            </div>
           <div className={classes.showMore}>
               <button>Show More</button>
           </div>

        </div>
    )
}

export default Users;