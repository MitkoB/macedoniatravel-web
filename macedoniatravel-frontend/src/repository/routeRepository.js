import axios from '../custom-axios/axios';

const RouteService = {
    fetchRoutes: () => {
        return axios.get("/routes");
    },
    fetchAttractions: () => {
        return axios.get("/attractions");
    }
}
export default RouteService;
