import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.box}>
                <img
                    src='https://cdn1.fullpicture.ru/wp-content/uploads/2015/06/Takim-nash-mir-vidyat-kompyutery-1.jpg'/>
            </div>

            <div className={s.descriptionBlock}>
                <ProfileStatus status={'статус :('}/>
                <img src={props.profile.photos.large}/>
                <div>
                    <span>{props.profile.aboutMe}</span>
                </div>
            </div>
            <div className={s.profileContacts}>
                <div>
                    <div>Facebook:</div>
                    <div>{props.profile.contacts.facebook}</div>
                </div>
                <div>
                    <div>Website:</div>
                    <div>{props.profile.contacts.website}</div>
                </div>
                <div>
                    <div>vk:</div>
                    <div>{props.profile.contacts.vk}</div>
                </div>
                <div>
                    <div>twitter:</div>
                    <div>{props.profile.contacts.twitter}</div>
                </div>
                <div>
                    <div>instagram:</div>
                    <div>{props.profile.contacts.instagram}</div>
                </div>
                <div>
                    <div>youtube:</div>
                    <div>{props.profile.contacts.youtube}</div>
                </div>
                <div>
                    <div>github:</div>
                    <div>{props.profile.contacts.github}</div>
                </div>
                <div>
                    <div>mainLink:</div>
                    <div>{props.profile.contacts.mainLink}</div>
                </div>
            </div>
        </div>


    )
}

export default ProfileInfo;