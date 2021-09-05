import React from "react";
import {useHistory} from 'react-router-dom';
import '../Login/loginForm.css'
import AuthService from '../../repository/authRepository'
import appLogo from "../../assets/img/logoMacedoniaTravel2.png";

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
        <div className="container-fluid  h-custom">
            <div className="d-flex align-items-center">
                <div className="container" id="container-login">
                    <div className="row justify-content-center">
                        <div className="col" id="formColumn">
                            <img src={appLogo} alt="logo"/>
                            <hr className="horizontal_line"/>
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
                                <div className="text-center text-lg-start mt-4 mb-5 pt-2">
                                    <button type="submit"
                                            className="btn btn-primary btn-lg"
                                            id="loginBtn">Confirm
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ConfirmAccount;