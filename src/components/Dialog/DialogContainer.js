import React from 'react';
import {addMessageDialogAction, updateMessageDialog} from "../../Redux/dialogsReducer";
import Dialog from "./Dialog";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        newDialogMessage: state.newDialogMessage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageDialogAction())
        },
        updateMessage: (text) => {
            dispatch(updateMessageDialog(text))
        }
    }
}


const DialogContainer = connect(mapStateToProps,mapDispatchToProps) (Dialog);


export default DialogContainer;