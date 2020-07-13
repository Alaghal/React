import React from 'react';
import Classes from './ProfileInfo.module.css';
import WorldWideImg from "./WorldWideImg/WorldWideImg";
import User from "./User/User";
import PreLoader from "../../commons/PreLoader/PreLoader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <PreLoader/>
    }
    return (
        <div className={Classes.info}>
            <WorldWideImg/>
            <User profile={props.profile}/>
        </div>);
}

export default ProfileInfo;