import React from "react";
import {useHistory} from 'react-router-dom';
import '../Login/loginForm.css'
import AuthService from '../../repository/authRepository'
import loginImage from '../../assets/img/loginPageImage.jpg'

const ConfirmAccount = (props) => {
    const history = useHistory();
    const [formData, updateFormData] = React.useState({
        token: "",
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const token = formData.token;

        AuthService.confirmRegistration(token).then(
            history.push("/login")
        ).catch(error => {
            console.log(error?.response?.data?.message)
        })
}

return (
    <section className="vh-100">
        <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-md-9 col-lg-6 col-xl-5">
                    <img src={loginImage}
                         className="img-fluid"
                         alt="Login image"/>
                </div>
                <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 mt-2" id="formColumn">
                    <h2 className="text-center" id="loginTitle">Confirm your registration process</h2>
                    <form onSubmit={onFormSubmit} id="formData">
                        <div className="form-outline mb-4 mt-3">
                            <label className="form-label"
                                   htmlFor="token">Validation code from email</label>
                            <input type="text"
                                   id="token"
                                   name="token"
                                   className="form-control form-control-lg"
                                   placeholder="Enter validation code"
                                   autoFocus=""
                                   required={true}
                                   onChange={handleChange}/>
                        </div>
                        <div className="text-center text-lg-start mt-4 pt-2">
                            <button type="submit"
                                    className="btn btn-primary btn-lg"
                                    id="loginBtn">Confirm
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
);
}
export default ConfirmAccount;