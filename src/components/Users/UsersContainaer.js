import {followAC, setCurentPageAC, setTotalUserAC, setUsersAC, unFollowAC} from "../../Redux/usersReducer";
import {connect} from "react-redux";
import Users from "./Users";
import * as React from "react";
import * as axios from "axios";


class UserContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUserCount(response.data.totalCount)
            })
    }

    onPageChange = (pageNumber) => {
        this.props.setCurentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }

    render() {
        return <Users totalUsersCount ={this.props.totalUsersCount}
                      userPage ={this.props.userPage}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      follow={this.props.follow}
                      unFollow={this.props.unFollow}
                      setUsers={this.props.setUsers}
                      setCurentPage={this.props.setCurentPage}
                      setTotalUserCount={this.props.setTotalUserCount}
                      onPageChange={this.onPageChange}
        >

        </Users>
    }
}

let mapStateToProps = (state) => {
    return {
        userPage: state.userPage,
        pageSize: state.userPage.pageSize,
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage: state.userPage.numberCurrentPage
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
        },
        setCurentPage: (numberPage) => {
            dispatch(setCurentPageAC(numberPage))
        },
        setTotalUserCount: (countUser) => {
            dispatch(setTotalUserAC(countUser))
        },

    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UserContainer);

export default UsersContainer