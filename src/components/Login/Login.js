import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../commons/FormControls/FormControls";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'}
                       name={"login"}
                       component={Input}>
                </Field>
            </div>
            <div>
                <Field placeholder={'Password'}
                       name={"password"}
                       component={Input}>
                </Field>
            </div>
            <div>
                <Field type="checkbox"
                       name={"rememberMe"}
                       component={Input}
                >
                </Field> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'}) (LoginForm)

const Login = (props) => {
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm />
        </div>
    )
}

export default Login