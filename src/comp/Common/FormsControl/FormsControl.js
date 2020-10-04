import React from 'react';
import styles from './FormsControl.module.css';
import {Field} from "redux-form";

export const FormControl = ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error;
    return (
        <div
            className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>

                <input {...input} {...props}/>
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const createField = (placeholder = {}, name, type, validators = {}, text = '') =>
    <div>
        <Field
            {...placeholder} type={type}
            name={name}
            {...validators}
            component={FormControl}/>{text}
    </div>