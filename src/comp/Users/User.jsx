import React from 'react';
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/images/img1.jpg";
import styles from "./users.module.css";

const User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img
                            src={user.photos.small != null ? user.photos.small : userPhoto}
                            className={styles.photo} alt=""/>
                    </NavLink>
                </div>
                <div> {user.followed ?
                    <button
                        disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => {
                            unfollow(user.id, user.followed)
                        }}>Unfollow</button>
                    : <button
                        disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => {
                            follow(user.id, user.followed)
                        }}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                { //                        <span><div>{'user.location.country'}</div>
                    //<div>{'user.location.city'}</div></span>
                }
            </span>
        </div>
    );
};

export default User;