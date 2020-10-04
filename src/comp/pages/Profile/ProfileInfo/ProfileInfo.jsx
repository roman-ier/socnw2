import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.box}>
                <img
                    src="https://cdn1.fullpicture.ru/wp-content/uploads/2015/06/Takim-nash-mir-vidyat-kompyutery-1.jpg"
                    alt=""/>
            </div>

            <div className={s.descriptionBlock}>
                <ProfileStatusWithHooks status={status}
                                        updateStatus={updateStatus}/>
                <img src={profile.photos.large} alt=""/>
                <div>
                    <span>{profile.aboutMe}</span>
                </div>
            </div>
            <div className={s.profileContacts}>
                <div>
                    <div>name:</div>
                    <div>{profile.fullName}</div>
                </div>
                <div>
                    <div>id:</div>
                    <div>{profile.userId}</div>
                </div>
                <div>
                    <div>Facebook:</div>
                    <div>{profile.contacts.facebook}</div>
                </div>
                <div>
                    <div>Website:</div>
                    <div>{profile.contacts.website}</div>
                </div>
                <div>
                    <div>vk:</div>
                    <div>{profile.contacts.vk}</div>
                </div>
                <div>
                    <div>twitter:</div>
                    <div>{profile.contacts.twitter}</div>
                </div>
                <div>
                    <div>instagram:</div>
                    <div>{profile.contacts.instagram}</div>
                </div>
                <div>
                    <div>youtube:</div>
                    <div>{profile.contacts.youtube}</div>
                </div>
                <div>
                    <div>github:</div>
                    <div>{profile.contacts.github}</div>
                </div>
                <div>
                    <div>mainLink:</div>
                    <div>{profile.contacts.mainLink}</div>
                </div>
            </div>
        </div>


    )
}

export default ProfileInfo;