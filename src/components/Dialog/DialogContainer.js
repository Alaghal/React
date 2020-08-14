import React from 'react';
import {addMessage, updateMessage} from "../../Redux/dialogsReducer";
import Dialog from "./Dialog";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        newDialogMessage: state.newDialogMessage,
        isAuth: state.auth.isAuth,
    }
}

const DialogContainer = connect(mapStateToProps,{addMessage,updateMessage}) (Dialog);


export default DialogContainer;