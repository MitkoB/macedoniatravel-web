import axios from '../custom-axios/axios';

const RouteService = {
    fetchRoutes: () => {
        return axios.get("/routes");
    },
    fetchAttractions: () => {
        return axios.get("/attraction");
    },
    fetchAttractionTypes: () => {
        return axios.get("/attraction/types")
    },
    getAttraction: (id) => {
        return axios.get(`attraction/${id}`)
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
    },

    addAttraction: (name, latitude, longitude, location, description, pictures, attractionType) => {
        return axios.post("/attraction/add", {
            "name": name,
            "latitude": latitude,
            "longitude": longitude,
            "location":location,
            "description":description,
            "pictures": pictures,
            "attractionType": attractionType
        });
    },

    editAttraction: (id, name, latitude, longitude, location, description, pictures, attractionType) => {
        return axios.put(`/attraction/edit/${id}`, {
            "name": name,
            "latitude": latitude,
            "longitude": longitude,
            "location": location,
            "description": description,
            "pictures": pictures,
            "attractionType": attractionType
        });
    },

    deleteAttraction: (id) => {
        return axios.delete(`/attraction/delete/${id}`);
    }
}
export default RouteService;
