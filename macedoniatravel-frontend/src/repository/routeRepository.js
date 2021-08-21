import axios from '../custom-axios/axios';

const RouteService = {
    fetchRoutes: () => {
        return axios.get("/routes");
    },
    fetchAttractions: () => {
        return axios.get("/attractions");
    },
    registerUser: (email, password, repeatPassword, firstName, lastName, address, contactNumber, role) => {
        return axios.post("/user/registration", {
            "email": email,
            "password": password,
            "repeatPassword": repeatPassword,
            "firstName":firstName,
            "lastName": lastName,
            "address": address,
            "contactNumber": contactNumber,
            "role": role
        });
    }
}
export default RouteService;
