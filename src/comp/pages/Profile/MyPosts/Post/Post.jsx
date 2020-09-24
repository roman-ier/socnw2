import React from 'react';

import s from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className={s.posts} >
                <div className={(s.item+' '+s.post)}>
                    <img src='https://img1.goodfon.ru/original/800x480/2/ad/zverek-belka-malysh.jpg' />
                    <div>
                        <span>{props.message} {props.age}</span>
                    </div>
                    <div>
                        <span>like {props.likeCount}</span>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;