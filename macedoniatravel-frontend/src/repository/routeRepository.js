import axios from '../custom-axios/axios';

const RouteService = {
    fetchRoutes: () => {
        return axios.get("/route");
    },
    fetchAttractions: () => {
        return axios.get("/attraction");
    },
    fetchAttractionTypes: () => {
        return axios.get("/attraction/types")
    },
    fetchRouteStatuses: () => {
        return axios.get("/route/statuses")
    },
    getAttraction: (id) => {
        return axios.get(`attraction/${id}`)
    },
    getRoute: (id) => {
        return axios.get(`route/${id}`)
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
    addRoute: (name, description, startDate, endDate, pictures, routeStatus, touristAttractions, price) => {
        return axios.post("/route/add", {
            "name": name,
            "description": description,
            "startDate": startDate,
            "endDate":endDate,
            "pictures":pictures,
            "routeStatus": routeStatus,
            "touristAttractions": touristAttractions,
            "price":price
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
    editRoute: (id, name, description, startDate, endDate, pictures, routeStatus, touristAttractions, price) => {
        return axios.put(`/route/edit/${id}`, {
            "name": name,
            "description": description,
            "startDate": startDate,
            "endDate":endDate,
            "pictures":pictures,
            "routeStatus": routeStatus,
            "touristAttractions": touristAttractions,
            "price":price
        });
    },
    deleteAttraction: (id) => {
        return axios.delete(`/attraction/delete/${id}`);
    },
    deleteRoute: (id) => {
        return axios.delete(`/route/delete/${id}`);
    }
}
export default RouteService;
