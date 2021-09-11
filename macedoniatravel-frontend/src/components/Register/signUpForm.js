import React from "react";
import {Link, useHistory} from 'react-router-dom';
import AuthService from "../../repository/authRepository"
import "../Login/loginForm.css"
import appLogo from '../../assets/img/logoMacedoniaTravel2.png'


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
        role: "ROLE_USER"
    })
    const [error, setError] = React.useState({
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
        const firstName = formData.firstName;
        const lastName = formData.lastName;
        const email = formData.email;
        const password = formData.password;
        const repeatPassword = formData.repeatPassword;
        const address = formData.address;
        const contactNumber = formData.contactNumber;
        const role = formData.role;

        if (password.length < 7) {
            setError({
                ...error,
                message: "Password must be at least 7 characters"
            })
        } else {
            AuthService.registerUser(email, password, repeatPassword, firstName, lastName, address, contactNumber, role)
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
        <div className="container-fluid  h-custom1">
            <div className="d-flex align-items-center">
                <div className="container" id="container-login">
                    <div className="row justify-content-center">
                        <div className="col" id="formColumn">
                            <img src={appLogo} alt="logo"/>
                            <hr className="horizontal_line"/>
                            <h2 className="text-center" id="registerTitle">Register</h2>
                            {error.message !== "" ? (
                                <div
                                    className="alert alert-warning">{error.message}
                                </div>
                            ) : <p/>}
                            <form onSubmit={onFormSubmit} id="formData">
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
                                <div className="form-outline mb-2 d-inline-block">
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
                                <div className="form-outline d-inline-block mx-2">
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
                                <br/>
                                <div className="d-inline-block  form-outline mb-2">
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
                                <div className="d-inline-block form-outline mx-2">
                                    <label className="form-label"
                                           htmlFor="lastName">Last name</label>
                                    <input type="text"
                                           id="lastName"
                                           name="lastName"
                                           className="form-control form-control-lg"
                                           placeholder="Enter your last name"
                                           onChange={handleChange}/>
                                </div>
                                <br/>
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
                                <div className="d-inline-block form-outline mb-2 mx-2">
                                    <label className="form-label"
                                           htmlFor="address">Contact Number</label>
                                    <input type="text"
                                           id="contactNumber"
                                           name="contactNumber"
                                           className="form-control form-control-lg"
                                           placeholder="Enter your number"
                                           onChange={handleChange}
                                           required/>
                                </div>
                                <div className="form-outline mb-2">
                                    <label className="form-label"
                                           htmlFor="role">Role</label>
                                    <select className="form-select form-control" id="role" name="role" required
                                         onChange={handleChange}>
                                        <option selected>Open to choose your role</option>
                                        <option value="ROLE_USER">User</option>
                                        <option value="ROLE_TENANT">Tenant</option>
                                    </select>
                                </div>

                                <div className="text-center text-lg-start pt-2">
                                    <button type="submit"
                                            className="btn btn-primary btn-lg"
                                            id="registerBtn">Register
                                    </button>
                                    <p className="small fw-bold mt-2 mb-2 pt-1">Already have an account?
                                        <span>  </span> <Link to={"/login"} className="link-danger"
                                                              id="registerLink">Login</Link>
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

export default SignUpForm;