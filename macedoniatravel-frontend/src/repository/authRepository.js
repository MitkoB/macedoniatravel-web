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
            });
    }

    logout() {
        return axios.post("/auth/logout").then(() => {
            TokenService.removeUser();
        })
    }

    register(username, email, password) {
        return axios.post("/auth/signup", {
            username,
            email,
            password
        });
    }

    getCurrentUser() {
        return TokenService.getUser();
    }
}

export default new AuthService();