import * as React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, setProfilePage} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRiderect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
         this.props.getProfile(userId);
    }

    render() {
        return <Profile profile={this.props.profile}/>
    }

}

let mapStateToProps = (state) => ({
    profile: state.postPage.profile
})



export default compose (
    connect(mapStateToProps, {setProfilePage,getProfile}),
        withRouter,
    withAuthRedirect
)(ProfileContainer)