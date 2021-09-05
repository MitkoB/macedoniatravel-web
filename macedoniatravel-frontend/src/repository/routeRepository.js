import axios from '../custom-axios/axios';

const RouteService = {
    fetchRoutes: () => {
        return axios.get("/route");
    },
    fetchAttractions: () => {
        return axios.get("/attraction");
    },
    searchAttractions: (name) => {
        return axios.get('/attraction', {
            params: {
                name: name
            }
        })
    },
    fetchAttractionTypes: () => {
        return axios.get("/attraction/types")
    },
    fetchRouteStatuses: () => {
        return axios.get("/route/statuses")
    },
    fetchFavoriteCartItems: () => {
        return axios.get("/favorite-cart/items")
    },
    fetchFamousEvents: () => {
        return axios.get("/famous-event")
    },
    getAttraction: (id) => {
        return axios.get(`attraction/${id}`)
    },
    getRoute: (id) => {
        return axios.get(`route/${id}`)
    },
    getFamousEvent: (id) => {
        return axios.get(`famous-event/${id}`)
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
    addFamousEvent: (title, description, start, end, picture, location) => {
        return axios.post("/famous-event/create", {
            "title": title,
            "description": description,
            "start": start,
            "end":end,
            "picture":picture,
            "location": location
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
    editFamousEvent: (id, title, description, start, end, picture, location) => {
        return axios.put(`/famous-event/edit/${id}`, {
            "id":id,
            "title": title,
            "description": description,
            "start": start,
            "end":end,
            "picture":picture,
            "location": location
        });
    },
    deleteAttraction: (id) => {
        return axios.delete(`/attraction/delete/${id}`);
    },
    deleteRoute: (id) => {
        return axios.delete(`/route/delete/${id}`);
    },
    deleteFamousEvent: (id) => {
        return axios.delete(`/famous-event/delete/${id}`);
    },
    removeItem: (id) => {
        return axios.delete(`/favorite-cart/${id}/routeRemove`);
    }
}
export default RouteService;
