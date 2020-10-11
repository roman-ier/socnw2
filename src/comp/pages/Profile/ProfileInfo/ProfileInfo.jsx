import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusHooks";
import userPhoto from "../../../../assets/images/img1.jpg";

const ProfileInfo = ({savePhoto,profile, status, updateStatus, isOwner}) => {
    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length){
            savePhoto(e.target.file[0])
        }
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
                <img src={profile.photos.large || userPhoto}
                     className={s.mainPhoto} alt="Дазен'т фото"/>
                {isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
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