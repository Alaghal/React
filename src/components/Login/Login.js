import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import classes from '../commons/FormControls/FormControls.module.css'
import {login} from "../../Redux/authReducer";
import {Input} from "../commons/FormControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validator";

const maxLength100 = maxLengthCreator(100);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'}
                       name={"email"}
                       validate={[required, maxLength100]}
                       component={Input}>
                </Field>
            </div>
            <div>
                <Field placeholder={'Password'}
                       name={"password"}
                       type={"password"}
                       validate={[required, maxLength100]}
                       component={Input}>
                </Field>
            </div>
            <div>
                <Field type="checkbox"
                       name={"rememberMe"}
                       component={Input}>
                </Field> remember me
            </div>
            {props.error && <div className={classes.formSummaryError}>
                {props.error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSumbmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSumbmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);