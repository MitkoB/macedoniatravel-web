import React from "react";
import {useHistory} from 'react-router-dom';

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
        props.onUserRegister(email,password,repeatPassword,firstName,lastName,address,contactNumber,role);
        history.push("/dashboard");
    }
    return (
        <form onSubmit={onFormSubmit}>
            <h3>Sign Up</h3>

            <div className="form-group">
                <label>First name</label>
                <input type="text"
                       className="form-control"
                       id="firstName"
                       name="firstName"
                       placeholder="First name"
                       onChange={handleChange}/>
            </div>

            <div className="form-group">
                <label>Last name</label>
                <input type="text"
                       className="form-control"
                       id="lastName"
                       name="lastName"
                       placeholder="Last name"
                       onChange={handleChange}/>
            </div>

            <div className="form-group">
                <label>Email address</label>
                <input type="email"
                       className="form-control"
                       id="email"
                       name="email"
                       placeholder="Enter email"
                       onChange={handleChange}/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password"
                       className="form-control"
                       id="password"
                       name="password"
                       placeholder="Enter password"
                       onChange={handleChange}/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password"
                       className="form-control"
                       id="repeatPassword"
                       name="repeatPassword"
                       placeholder="Repeat password"
                       onChange={handleChange}/>
            </div>

            <div className="form-group">
                <label>Address</label>
                <input type="text"
                       className="form-control"
                       id="address"
                       name="address"
                       placeholder="Enter address"
                       onChange={handleChange}/>
            </div>

            <div className="form-group">
                <label>Contact number</label>
                <input type="text"
                       className="form-control"
                       id="contactNumber"
                       name="contactNumber"
                       placeholder="Enter contact number"
                       onChange={handleChange}/>
            </div>

            <div className="form-group">
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="role" id="role"
                           value="ROLE_USER" checked/>
                        <label className="form-check-label" htmlFor="role1">
                            regular user
                        </label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="role" id="role"
                           value="ROLE_TENANT"/>
                        <label className="form-check-label" htmlFor="role2">
                            tenant
                        </label>
                </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            <p className="forgot-password text-right">
                Already registered <a href="#">sign in?</a>
            </p>
        </form>
    );
}

export default SignUpForm;