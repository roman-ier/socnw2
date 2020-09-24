import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post
        message={p.message} key={p.id} likeCount={p.likesCount}/>)
    let newPostElement = React.createRef();
    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <div>
                <textarea ref={newPostElement} onChange={onPostChange}
                          value={props.newPostText}/>
                <button onClick={onAddPost}>add post</button>
                <button>rm</button>
            </div>
            <div className={s.posts}>
                {postsElements}

            </div>
        </div>
    )
}

export default MyPosts;