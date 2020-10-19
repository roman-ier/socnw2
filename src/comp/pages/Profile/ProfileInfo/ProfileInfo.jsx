import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusHooks";
import userPhoto from "../../../../assets/images/img1.jpg";
import ProfileDataForm from "./ProfileStatus/ProfileDataForm/ProfileDataForm";

const ProfileInfo = ({savePhoto,profile, status, updateStatus, isOwner}) => {
    let [editMode, setEditMode] = useState(false);
    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length){
            savePhoto(e.target.files[0])
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

                {editMode ? <ProfileDataForm profile={profile}/> :
                    <ProfileData profile={profile} isOwner={isOwner} goToEditMode={()=>{setEditMode(true)}}/>}

            </div>
        </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            {isOwner && <div>
                <button onClick={goToEditMode}>Редактировать</button>
            </div>}
            <div>
                <b>About ME: </b><span>{profile.aboutMe}</span>
            </div>
            <div className={s.profileContacts}>
                <div>
                    <b>Full name: </b>{profile.fullName}
                </div>
                <div>
                    <b>id: </b>{profile.userId}
                </div>
                <div>
                    <b>Looking for a
                        job: </b> {profile.lookingForAJob ? 'yes' : 'no'}
                </div>
                <div>
                    {!profile.lookingForAJob &&
                    <div>
                        <b>My professionl
                            skills: </b> {profile.lookingForAJobDescription}
                    </div>}
                </div>

            </div>
            <b>Contacts: </b>
            <div className={s.profileContacts}>
                {Object.keys(profile.contacts).map(key => {
                    return <Contact contactTitle={key} key={key}
                                    contactValue={profile.contacts[key]}/>
                })}

            </div>
        </div>
    );
};

const Contact = ({contactTitle, contactValue}) => {
    return <div><b>{contactTitle}: </b>{contactValue}

    </div>
}

export default ProfileInfo;