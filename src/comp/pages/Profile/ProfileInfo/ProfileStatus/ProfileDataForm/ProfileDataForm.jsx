import React from 'react';
import s from "../../ProfileInfo.module.css";
import {reduxForm} from "redux-form";
import {createField} from "../../../../../Common/FormsControl/FormsControl";

const ProfileDataForm = ({profile,handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button>Сохранить</button>
            </div>
            <div>
                <b>About ME: </b>{createField(
                {placeholder: 'Краткая информация'},
                'aboutMe',
                'input',
                null,
                '')}
            </div>
            <div className={s.profileContacts}>
                <div>
                    <b>Full name: </b>
                    {createField(
                        {placeholder: 'Полное имя'},
                        'fullName',
                        'input',
                        null,
                        '')}
                </div>
                <div>
                    <b>id: </b>{profile.userId}
                </div>
                <div>
                    <b>Looking for a job: </b>
                    {createField(
                        '',
                        'lookingForAJob',
                        'checkbox',
                        null, '')}
                </div>
                <div>
                    <b>My professional skills: </b>
                    {createField(
                        {placeholder: 'Профессиональные навыки'},
                        'lookingForAJobDescription',
                        'textarea',
                        null, '')}
                </div>

            </div>
            <b>Contacts: </b>
            {/*            <div className={s.profileContacts}>
                {Object.keys(profile.contacts).map(key => {
                    return <Contact contactTitle={key} key={key}
                                    contactValue={profile.contacts[key]}/>
                })}

            </div>*/}
        </form>
    );
};
const ProfileDataFormRedux=reduxForm({form:'ProfileDataForm'})(ProfileDataForm)
export default ProfileDataFormRedux;