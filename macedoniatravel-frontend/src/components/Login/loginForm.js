import React from "react";
import {useHistory} from 'react-router-dom';
import {Link} from "react-router-dom";

const LoginForm = (props) => {
    const history = useHistory();
    const [formData, updateFormData] = React.useState({
        email: "",
        password: "",
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
        props.onUserSignIn(email,password);
        history.push("/dashboard");
    }
    return (
        <form onSubmit={onFormSubmit}>
            <h3>Sign In</h3>


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


            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            <p className="forgot-password text-right">
                Not registered yet <Link to={"/register"}>sign up?</Link>
            </p>
        </form>
    );
}

export default LoginForm;