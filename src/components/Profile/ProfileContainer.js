import * as React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setProfilePage} from "../../Redux/profileReducer";


class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                debugger;
                this.props.setProfilePage(response.data);
            })
    }

    render() {
        debugger;
        return <Profile profile={this.props.profile} />
    }

}
let mapStateToProps = (state) => ({
    profile: state.postPage.profile
})

export default connect(mapStateToProps, {setProfilePage})(ProfileContainer);