import React from 'react';
import s from '../ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    //statusInputRef = React.createRef();

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState(
            {editMode: true}
        )
        /*if (!this.state.editMode) {
            this.props.updateStatus(this.state.status)
        }*/
    }
    deactivateEditMode = () => {
        this.setState(
            {editMode: false}
        )
            //this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.target.value
        });

    }

    render() {
        alert(this.props.status)
        debugger
        return (

            <div>
                {!this.state.editMode ?
                    <div>
                        <span className={s.status} onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                    :
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true}
                               value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;