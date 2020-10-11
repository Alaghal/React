import * as React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getUserStatus, setProfilePage, updateUserStatus} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 9588;
        }
        this.props.getProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        return <Profile status={this.props.status} updateStatus={this.props.updateUserStatus}
                        profile={this.props.profile}/>
    }

}

let mapStateToProps = (state) => ({
    profile: state.postPage.profile,
    status: state.postPage.status
})


export default compose(
    connect(mapStateToProps, {setProfilePage, getProfile, getUserStatus, updateUserStatus}),
    withRouter
)(ProfileContainer)