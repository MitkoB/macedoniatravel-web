import React from "react";
import {Link, useHistory} from 'react-router-dom';
import loginImage from "../../assets/img/loginPageImage.jpg";
import AuthService from "../../repository/authRepository"
import "../Login/loginForm.css"

const SignUpForm = (props) => {
    const history = useHistory();
    const [formData, updateFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        repeatPassword: "",
        address: "",
        contactNumber: "",
        role:"ROLE_USER"
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }
    const [error, setError] = React.useState({
        message: ""
    })
    const onFormSubmit = (e) => {
        e.preventDefault();
        const firstName = formData.firstName;
        const lastName = formData.lastName;
        const email = formData.email;
        const password = formData.password;
        const repeatPassword = formData.repeatPassword;
        const address = formData.address;
        const contactNumber = formData.contactNumber;
        const role = formData.role;

        if (password.length <7) {
            setError({
                ...error,
                message: "Password must be at least 7 characters"
            })
        } else {
            AuthService.registerUser(email,password,repeatPassword,firstName,lastName,address,contactNumber,role)
                .then(data => {
                    setError({
                        ...error,
                        message: ""
                    })
                    history.push("/confirm-account");
                })
                .catch(error => {
                    console.log(error?.response?.data?.message)
                    setError({
                        ...error,
                        message: error?.response?.data?.message
                    })
                })
        }
    }
    return (
        <section className="vh-100">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100 mt-2">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src={loginImage}
                             className="img-fluid"
                             alt="Register image" />
                    </div>
                    <div className="col-md-7 col-lg-5 col-xl-4 offset-xl-1 mt-5" id="formColumn">
                        <h2 className="text-center mt-5" id="registerTitle">Register</h2>
                        {error.message !== "" ? (
                            <div
                                className="alert alert-warning">{error.message}
                            </div>
                        ):<p/>}
                        <form onSubmit={onFormSubmit} id="formData">
                            <div className="d-inline-block  form-outline mt-2 mb-2">
                                <label className="form-label"
                                       htmlFor="firstName">First name</label>
                                <input type="text"
                                       id="firstName"
                                       name="firstName"
                                       className="form-control form-control-lg"
                                       placeholder="Enter your first name"
                                       autoFocus=""
                                       onChange={handleChange}/>
                            </div>
                            <div className="d-inline-block form-outline mb-2">
                                <label className="form-label"
                                       htmlFor="lastName">Last name</label>
                                <input type="text"
                                       id="lastName"
                                       name="lastName"
                                       className="form-control form-control-lg"
                                       placeholder="Enter your last name"
                                       autoFocus=""
                                       onChange={handleChange}/>
                            </div>
                            <div className="form-outline mb-2">
                                <label className="form-label"
                                       htmlFor="email">Email address</label>
                                <input type="email"
                                       id="email"
                                       name="email"
                                       className="form-control form-control-lg"
                                       placeholder="Enter your email address"
                                       required="true"
                                       onChange={handleChange}/>
                            </div>
                            <div className="form-outline mb-2">
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
                            <div className="form-outline">
                                <label className="form-label"
                                       htmlFor="repeatPassword">Repeat Password</label>
                                <input type="password"
                                       id="repeatPassword"
                                       name="repeatPassword"
                                       className="form-control form-control-lg"
                                       placeholder="Repeat your password"
                                       required="true"
                                       onChange={handleChange}/>
                            </div>
                            <div className="d-inline-block form-outline mb-2">
                                <label className="form-label"
                                       htmlFor="address">Address</label>
                                <input type="text"
                                       id="address"
                                       name="address"
                                       className="form-control form-control-lg"
                                       placeholder="Enter your address"
                                       onChange={handleChange}/>
                            </div>
                            <div className="d-inline-block form-outline mb-2">
                                <label className="form-label"
                                       htmlFor="contactNumber">Contact number</label>
                                <input type="text"
                                       id="contactNumber"
                                       name="contactNumber"
                                       className="form-control form-control-lg"
                                       placeholder="Enter contact number"
                                       required="true"
                                       onChange={handleChange}/>
                            </div>
                            <div className="form-outline mb-2">
                                <label className="form-label"
                                       htmlFor="role">Role</label>
                                <select className="form-select" id="role" name="role">
                                    <option selected>Open to choose your role</option>
                                    <option value="ROLE_USER">User</option>
                                    <option value="ROLE_TENANT">Tenant</option>
                                </select>
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
                            </div>

                            <div className="text-center text-lg-start mt-3 pt-2">
                                <button type="submit"
                                        className="btn btn-primary btn-lg"
                                        id="registerBtn">Register
                                </button>
                                <p className="small fw-bold mt-2 mb-2 pt-1">Already have an account?
                                    <span>  </span> <Link to={"/login"} className="link-danger" id="registerLink">Login</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default SignUpForm;