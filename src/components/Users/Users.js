import * as React from "react";
import classes from "./Users.module.css";
import User from "./User/User";
import * as axios from "axios";


class Users extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items);
        })
    }

    render() {
        return <div>
            <h2>Users</h2>
            <div className={classes.wrapper}>
                {this.props.userPage.users.map(u => <User id={u.id} key={u.id} followed={u.followed}
                                                          urlAvatar={u.photos.large}
                                                          name={u.name} status={u.status}
                                                          follow={this.props.follow} unFollow={this.props.unFollow}/>)}
            </div>
            <div className={classes.showMore}>
                <button>Show More</button>
            </div>

        </div>
    }
}

export default Users