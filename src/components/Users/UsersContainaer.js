import {
    follow,
    requestUsers,
    setCurentPage,
    setUsers,
    toggleFollowingInProgress,
    unFollow,
} from '../../Redux/usersReducer';
import {connect} from 'react-redux';
import Users from './Users';
import * as React from 'react';
import PreLoader from "../commons/PreLoader/PreLoader";
import {withAuthRedirect} from "../../hoc/withAuthRiderect";
import {compose} from "redux";


class UserContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChange = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
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
                   toggleFetchingStatus={this.props.toggleFetchingStatus}
                   toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                   followingInProgress={this.props.followingInProgress}
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
        isFetching: state.userPage.isFetching,
        followingInProgress: state.userPage.followingInProgress,
    }
}

export default compose (
    connect(mapStateToProps, {
        follow,
        unFollow,
        setUsers,
        setCurentPage,
        toggleFollowingInProgress,
        getUsers: requestUsers
    }),
    withAuthRedirect)
(UserContainer)