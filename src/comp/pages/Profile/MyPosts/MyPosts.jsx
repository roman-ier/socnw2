import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {reduxForm} from "redux-form";
import {
    maxLengthCreator,
    requiredField
} from "../../../../utils/validators/validators";
import {createField} from "../../../Common/FormsControl/FormsControl";

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post
        message={p.message} key={p.id} likeCount={p.likesCount}/>)
    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>

            <div className={s.posts}>
                {postsElements}
                <ReduxAddNewPostForm onSubmit={onAddPost}/>
            </div>
        </div>
    )
}
const maxLength10 = maxLengthCreator(10);
const AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            {createField(
                {placeholder: 'текст нового сообщения'},
                'newPostText',
                'textarea',
                {validate: [requiredField, maxLength10]},
                '')}
        </div>
        <div>
            <button>add post</button>
        </div>
    </form>
}
const ReduxAddNewPostForm = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);

export default MyPosts;