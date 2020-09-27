import React from "react";
import {Field, reduxForm} from "redux-form";
import {FormControl} from "../Common/FormsControl/FormsControl";
import {requiredField} from "../../utils/validators/validators";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} type="input" name={'login'}
                       validate={[requiredField]}
                       component={FormControl}/>
            </div>
            <div>
                <Field placeholder={'Password'} type="input"
                       name={'password'}
                       component={FormControl}
                       validate={[requiredField]}/>
            </div>
            <div>
                <Field component={FormControl} name={'rememberMe'} type={'checkbox'}/>remember
                me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
const Login = (props) => {
    const onSubmit = (formData) => {
        alert(formData.password + '=>' + formData.login + '=>' + formData.rememberMe)
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
export default Login;