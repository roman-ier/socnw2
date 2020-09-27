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
        {
            this.state.editMode &&
            this.props.updateStatus(this.state.status)
        }
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.target.value
        });

    }
    componentDidUpdate = (prevProps, prevState, snapshot) => {
        if (prevProps.status !== this.props.status) {
            this.setState(
                {status: this.props.status}
            )
        }
    }

    render() {
        return (

            <div>
                {(this.state.editMode || this.state.status === '') ?
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} value={this.state.status}
                               onBlur={this.activateEditMode}/>
                    </div>
                    :
                    <div>
                        <span className={s.status} onDoubleClick={this.activateEditMode}>{this.state.status}</span>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;