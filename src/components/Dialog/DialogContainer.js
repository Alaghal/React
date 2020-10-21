import React from 'react';
import {addMessage} from "../../Redux/dialogsReducer";
import Dialog from "./Dialog";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRiderect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) =>{
    return {
        sendMessage: (newMessageBody) => {
            dispatch(addMessage(newMessageBody))
        }
    }
}

export default compose (connect(mapStateToProps,mapDispatchToProps), withAuthRedirect) (Dialog)