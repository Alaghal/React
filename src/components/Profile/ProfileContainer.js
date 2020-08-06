import * as React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setProfilePage} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import {profileAPI} from "../../api/api";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        profileAPI.getProfile(userId)
            .then(data => {
                this.props.setProfilePage(data);
            })
    }

    render() {
        return <Profile profile={this.props.profile}/>
    }

}

let mapStateToProps = (state) => ({
    profile: state.postPage.profile
})

const WithUrlParameterProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setProfilePage})(WithUrlParameterProfileContainer);