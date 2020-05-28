import React from 'react';
import Classes from './ProfileInfo.module.css';
import WorldWideImg from "./WorldWideImg/WorldWideImg";
import User from "./User/User";

const ProfileInfo = () => {
    return (
        <div className={Classes.info}>
          <WorldWideImg/>
          <User quote={"Hi, it's my blog"}/>
        </div>);
}

export default ProfileInfo;