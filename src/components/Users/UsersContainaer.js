import {followAC, setUsersAC, unFollowAC} from "../../Redux/usersReducer";
import {connect} from "react-redux";
import UsersC from "./UsersC";

let mapStateToProps = (state) => {
    return {
        userPage: state.userPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
            dispatch(followAC(id))
        },
        unFollow: (id) => {
            dispatch(unFollowAC(id))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC);

export default UsersContainer