import axios from '../custom-axios/axios';
import TokenService from './tokenRepository'

class AuthService {
    login(email, password) {
        return axios
            .post("/auth/signin", {
                email,
                password
            })
            .then(response => {
                if (response.data.token) {
                    TokenService.setUser(response.data);
                }
                return response.data;
            })
    }

    logout() {
        return axios.post("/auth/logout").then(() => {
            TokenService.removeUser();
        }).catch((error) => {
            console.log(error.response.data.message)
        })
    }

    registerUser(email, password, repeatPassword, firstName, lastName, address, contactNumber, role) {
        return axios.post("/user/registration", {
            "email": email,
            "password": password,
            "repeatPassword": repeatPassword,
            "firstName": firstName,
            "lastName": lastName,
            "address": address,
            "contactNumber": contactNumber,
            "role": role
        }).then(response => {
                console.log(response)
            }
        )
    }
    confirmRegistration(token) {
        return axios.get("/user/registrationConfirm", { params: { token }}).then(response => {
                console.log(response)
            }
        )
    }

    getCurrentUser() {
        return TokenService.getUser();
    }
}

export default new AuthService();