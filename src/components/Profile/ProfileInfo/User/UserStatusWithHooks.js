import React, {useState} from 'react';
import Classes from './User.module.css';

const UserStatusWithHooks = (props) => {
     let [editMode, setEditMode] = useState(false);
     let [status,setStatus] = useState(props.status);

      const activateEditMode = () => {
         setEditMode(true)
     }
    const diactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }


   const onStatusChange = (e) => {
       setStatus(e.currentTarget.value)
    }

        return (
            <div className={Classes.status}>
                {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || "----"}</span>
                </div>
                }
                {editMode &&
                <div>
                    <input  onChange={onStatusChange} autoFocus={true} onBlur={diactivateEditMode}  value={status} />
                </div>
                }
            </div>);

}

export default UserStatusWithHooks;