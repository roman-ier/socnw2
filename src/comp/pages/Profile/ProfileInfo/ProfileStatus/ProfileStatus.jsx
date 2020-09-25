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
            {editMode: !this.state.editMode}
        )
        /*if (!this.state.editMode) {
            this.props.updateStatus(this.state.status)
        }*/
    }
    activateEditMode = () => {
        this.setState(
            {editMode: !this.state.editMode}
        )
        /*if (!this.state.editMode) {
            this.props.updateStatus(this.state.status)
        }*/
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });

    }

    render() {
        alert(this.state.editMode)
        debugger
        return (

            <div>
                {!this.state.editMode ?
                    <div>
                        <span className={s.status} onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                    :
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.activateEditMode}
                               value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;