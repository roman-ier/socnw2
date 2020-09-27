import React from "react";
import {Field, reduxForm} from "redux-form";
import {FormControl} from "../Common/FormsControl/FormsControl";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import Redirect from "react-router-dom/es/Redirect";


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} type="input" name={'email'}
                       validate={[requiredField]}
                       component={FormControl}/>
            </div>
            <div>
                <Field placeholder={'Password'} type='password'
                       name={'password'}
                       component={FormControl}
                       validate={[requiredField]}/>
            </div>
            <div>
                <Field component={FormControl} name={'rememberMe'}
                       type={'checkbox'}/> remember me
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
        props.login(formData.email, formData.password, formData.rememberMe);
    }
    //alert(props.isAuth)
    if (props.isAuth) {

        return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);