import * as React from "react";
import classes from "./Users.module.css";
import User from "./User/User";


const Users = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    let firstPage = 1;
    for (let i = firstPage; i <= pageCount; i++) {
        pages.push(i);
    }

    return <div>
        <h2>Users</h2>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && classes.selectedPage}
                             onClick={() => {
                                 props.onPageChange(p);
                             }}>{p}</span>
            })}
        </div>
        <div className={classes.wrapper}>
            {props.userPage.users.map(u => <User id={u.id}
                                                 key={u.id}
                                                 followed={u.followed}
                                                 urlAvatar={u.photos.small}
                                                 name={u.name} status={u.status}
                                                 follow={props.follow}
                                                 unFollow={props.unFollow}/>)}
        </div>

        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && classes.selectedPage}>{p}</span>
            })}
        </div>

    </div>

}

export default Users