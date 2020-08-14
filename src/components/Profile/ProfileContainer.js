import * as React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, setProfilePage} from "../../Redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";
import {profileAPI} from "../../api/api";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
         this.props.getProfile(userId);
    }

    render() {
        if (this.props.isAuth) {return <Redirect to={"/login"} />}
        return <Profile profile={this.props.profile}/>
    }

}

let mapStateToProps = (state) => ({
    profile: state.postPage.profile,
    isAuth: state.auth.isAuth,
})

const WithUrlParameterProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setProfilePage,getProfile})(WithUrlParameterProfileContainer);