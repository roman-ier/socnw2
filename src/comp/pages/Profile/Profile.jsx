import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status}
                         isOwner={props.isOwner} savePhoto={props.savePhoto}
                         updateStatus={props.updateStatus}/>
            <MyPostsContainer state={props.state}
                              dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;