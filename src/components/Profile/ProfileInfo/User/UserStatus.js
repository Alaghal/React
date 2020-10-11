import React from 'react';
import Classes from './User.module.css';

class UserStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deaActivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <div className={Classes.status}>
                {!this.state.editMode &&
                <div>
                    <span  onDoubleClick={this.activateEditMode}>{this.props.status || "----"}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deaActivateEditMode} value={this.props.status}/>
                </div>
                }
            </div>);
    }
}

export default UserStatus;