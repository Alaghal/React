import React from 'react';
import {addMessageDialogAction, updateMessageDialog} from "../../Redux/dialogsReducer";
import Dialog from "./Dialog";
import StoreContext from "../../StoreContext";
import {addPostAction, updatePostAction} from "../../Redux/profileReducer";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
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