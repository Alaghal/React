import {
    follow,
    setCurentPage,
    setTotalUserCount,
    setUsers,
    toggleFetchingStatus,
    unFollow
} from '../../Redux/usersReducer';
import {connect} from 'react-redux';
import Users from './Users';
import * as React from 'react';
import PreLoader from "../commons/PreLoader/PreLoader";
import {usersAPI} from "../../api/api";


class UserContainer extends React.Component {
    componentDidMount() {
        this.props.toggleFetchingStatus(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleFetchingStatus(false);
                this.props.setUsers(data.items);
                this.props.setTotalUserCount(data.totalCount);
            })
    }

    onPageChange = (pageNumber) => {
        this.props.setCurentPage(pageNumber);
        this.props.toggleFetchingStatus(true)
        usersAPI.getUsers()
            .then(data => {
                this.props.toggleFetchingStatus(false)
                this.props.setUsers(data.items);
            })
    }

    render() {
        return <> {this.props.isFetching ? <PreLoader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   userPage={this.props.userPage}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
                   setUsers={this.props.setUsers}
                   setCurentPage={this.props.setCurentPage}
                   setTotalUserCount={this.props.setTotalUserCount}
                   onPageChange={this.onPageChange}
                   isFetching={this.props.isFetching}
                   toggleFetchingStatus={this.props.toggleFetchingStatus }
            >

            </Users>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        userPage: state.userPage,
        pageSize: state.userPage.pageSize,
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage: state.userPage.numberCurrentPage,
        isFetching: state.userPage.isFetching
    }
}



const UsersContainer = connect(mapStateToProps, {follow,unFollow,setUsers,setCurentPage,setTotalUserCount,toggleFetchingStatus})(UserContainer);

export default UsersContainer