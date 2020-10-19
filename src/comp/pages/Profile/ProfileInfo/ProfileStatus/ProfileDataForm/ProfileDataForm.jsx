import React from 'react';
import s from "../../ProfileInfo.module.css";
import {Form, reduxForm} from "redux-form";
import {createField} from "../../../../../Common/FormsControl/FormsControl";

const ProfileDataForm = ({profile}) => {
    return (
        <form>
 {/*           <div>
                <button onClick={''}>Сохранить</button>
            </div>*/}
            <div>
                <b>Full name: </b>{createField({placeholder: 'Полное имя'}, 'fullName', 'input', null, '')}
            </div>

            {/*
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

            </div>*/}
        </form>
    );
};
const ProfileDataFormRedux=reduxForm({form:'ProfileDataForm'})(ProfileDataForm)
export default ProfileDataForm;