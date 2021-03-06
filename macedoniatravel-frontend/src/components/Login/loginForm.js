import {React, useState} from "react";
import {useHistory} from 'react-router-dom';
import {Link} from "react-router-dom";
import '../Login/loginForm.css'
import AuthService from '../../repository/authRepository'
import appLogo from '../../assets/img/logoMacedoniaTravel2.png'

const LoginForm = (props) => {
    const history = useHistory();
    const [formData, updateFormData] = useState({
        email: "",
        password: ""
    })
    const [error, setError] = useState({
        message: ""
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const email = formData.email;
        const password = formData.password;

        if (password.length < 7) {
            setError({
                ...error,
                message: "Password must be at least 7 characters"
            })
        } else {
            AuthService.login(email, password)
                .then(data => {
                    setError({
                        ...error,
                        message: ""
                    })
                    props.onHandleLogin();
                    history.push("/dashboard");
                }).catch(error => {
                setError({
                    ...error,
                    message: error?.response?.data?.message
                })
            })
        }
    }

    return (
        <div className="container-fluid  h-custom">
            <div className="d-flex align-items-center">
                <div className="container" id="container-login">
                    <div className="row justify-content-center">
                        <div className="col" id="formColumn">
                            <img src={appLogo} alt="logo"/>
                            <hr className="horizontal_line"/>
                            <h2 className="text-center" id="loginTitle">Login</h2>
                            {error.message !== "" ? (
                                <div
                                    className="alert alert-warning">{error.message}
                                </div>
                            ) : <p/>}
                            <form onSubmit={onFormSubmit} id="formData">
                                <div className="form-outline mb-4 mt-3">
                                    <label className="form-label"
                                           htmlFor="email">Email address</label>
                                    <input type="email"
                                           id="email"
                                           name="email"
                                           className="form-control form-control-lg"
                                           placeholder="Enter your email address"
                                           autoFocus=""
                                           required="true"
                                           onChange={handleChange}/>
                                </div>
                                <div className="form-outline mb-3">
                                    <label className="form-label"
                                           htmlFor="password">Password</label>
                                    <input type="password"
                                           id="password"
                                           name="password"
                                           className="form-control form-control-lg"
                                           placeholder="Enter your password"
                                           required="true"
                                           onChange={handleChange}/>
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="form-check mb-0">
                                        <input className="form-check-input me-2"
                                               type="checkbox" value=""
                                               id="remember-me"/>
                                        <label className="form-check-label" htmlFor="remember-me">
                                            Remember me
                                        </label>
                                    </div>
                                    <Link to={"/"} className="text-body">Forgot password?</Link>
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="submit"
                                            className="btn btn-primary btn-lg"
                                            id="loginBtn"
                                    >Login
                                    </button>
                                    <p className="small fw-bold mt-3 mb-5 pt-1 mb-0">Don't have an account?
                                        <span>  </span> <Link to={"/register"} className="link-danger"
                                                              id="registerLink">Register</Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LoginForm;