import React from 'react';
import styles from './FormsControl.module.css';
import {Field} from "redux-form";

export const FormControl = ({input, meta: {touched, error}, ...props}) => {
    //console.log({...input} )
    const fieldTypeCase = (action) => {
        switch (action) {
            case 'textarea':
                return <textarea {...input} placeholder={props.placeholder}  />;
            default:
                return <input {...input} {...props}/>;
        }
    }
    const hasError = touched && error;
    return (
        <div
            className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {fieldTypeCase(props.type)}
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