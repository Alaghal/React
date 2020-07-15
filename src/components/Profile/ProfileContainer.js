import * as React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setProfilePage} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {

    componentDidMount() {
        debugger;
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                debugger;
                this.props.setProfilePage(response.data);
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