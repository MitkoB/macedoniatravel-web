import React from 'react';
import {useHistory} from 'react-router-dom';

const RouteAdd = (props) => {

    const history = useHistory();
    const [formData, updateFormData] = React.useState({
        name: "",
        description: "",
        startDate: "",
        endDate:"",
        pictures:"",
        routeStatus:0,
        touristAttractions:[],
        price:""
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }
    const handleChangeAttractions = (e) => {
        let value = Array.from(e.target.selectedOptions, option => option.value);
        formData.touristAttractions=value
    }
    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name;
        const description = formData.description;
        const startDate = formData.startDate;
        const endDate = formData.endDate;
        const pictures = formData.pictures;
        const routeStatus = formData.routeStatus;
        const touristAttractions = formData.touristAttractions;
        const price = formData.price;

        props.onAddRoute(name,description,startDate,endDate, pictures, routeStatus, touristAttractions, price);
        history.push("/routes");
    }
    return (
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Route name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               required
                               placeholder="Enter route name"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Description</label>
                        <textarea
                            className="form-control"
                            id="description"
                            name="description"
                            required
                            placeholder="Enter description"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Start date</label>
                        <input type="text"
                               className="form-control"
                               id="startDate"
                               name="startDate"
                               required
                               placeholder="Enter start date"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">End date</label>
                        <input type="text"
                               className="form-control"
                               id="endDate"
                               name="endDate"
                               required
                               placeholder="Enter end date"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Route status</label>
                        <select name="routeStatus" className="form-control" onChange={handleChange}>
                            {props.routeStatuses.map((term) =>
                                <option value={term}>{term}</option>
                            )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Pictures</label>
                        <input type="text"
                               className="form-control"
                               id="pictures"
                               name="pictures"
                               required
                               placeholder="Enter pictures urls"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Tourist Attractions</label>
                        <select name="touristAttractions" className="form-control" onChange={handleChangeAttractions} multiple={true}>
                            {props.attractions.map((term) =>
                                <option value={term.id}>{term.name}</option>
                            )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Price</label>
                        <input
                            className="form-control"
                            id="price"
                            name="price"
                            required
                            placeholder="Enter price"
                            onChange={handleChange}
                        />
                    </div>
                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default RouteAdd;
