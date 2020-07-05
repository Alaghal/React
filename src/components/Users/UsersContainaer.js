import {followAC, unFollowAC} from "../../Redux/usersReducer";
import {connect} from "react-redux";
import Users from "./Users";

let mapStateToProps = (state) => {
    return {
        userPage: state.userPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
            dispatch(followAC(id))
        },
        unFollow: (id) => {
            dispatch(unFollowAC(id))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer