import React from 'react';
import Classes from './ProfileInfo.module.css';
import User from "./User/User";
import UserStatus from "./User/UserStatus";
import PreLoader from "../../commons/PreLoader/PreLoader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <PreLoader/>
    }
    return (
        <div className={Classes.info}>
            <User profile={props.profile} />
            <UserStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>);
}

export default ProfileInfo;