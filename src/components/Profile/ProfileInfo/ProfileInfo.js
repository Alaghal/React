import React from 'react';
import Classes from './ProfileInfo.module.css';
import User from "./User/User";
import PreLoader from "../../commons/PreLoader/PreLoader";
import UserStatusWithHooks from "./User/UserStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <PreLoader/>
    }
    return (
        <div className={Classes.info}>
            <User profile={props.profile} />
            <UserStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        </div>);
}

export default ProfileInfo;