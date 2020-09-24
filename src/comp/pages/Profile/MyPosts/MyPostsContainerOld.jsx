import React from 'react';
import {addPostActionCreator, updatePostChangeActionCreator} from "../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.state;
    //alert(state.profilePage.posts);
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }
    let onPostChange = (text) => {
        let action = updatePostChangeActionCreator(text);
        props.dispatch(action);
    }
    return (<MyPosts updateNewPostText={onPostChange}
                     addPost={addPost}
                     posts={state.profilePage.posts}
                     newPostText={state.profilePage.newPostText}/>)
}

export default MyPostsContainer;