import React, {useEffect, useState} from 'react';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);
    useEffect(() => {
        setStatus(props.status);
    }, [props.status])
    let activateEditMode = () => {
        setEditMode(!editMode);
        {
            editMode &&
            props.updateStatus(status)
        }
    }
    let onStatusChange = (e) => {
        setStatus(e.target.value);
    }
    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>  {status}</span>
            </div>}
            {editMode &&
            <div>
                <input onChange={onStatusChange} value={status}
                       onBlur={activateEditMode} autoFocus={true}
                />
            </div>}

        </div>
    )

}

export default ProfileStatusWithHooks;