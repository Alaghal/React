import {connect} from "react-redux";
import Navbar from "./Navbar";
import {getFriends} from "../../Redux/usersReducer";
import * as React from "react";

class NavbarContainer extends React.Component {
    componentDidMount() {
        this.props.getFriends(1,10);
    }

    render() {
        return <Navbar
            userPage={this.props.userPage}/>
    }
}


let mapStateToProps = (state) => {
    return {
        userPage: state.userPage
    }
}

export default connect(mapStateToProps, {getFriends})(NavbarContainer);