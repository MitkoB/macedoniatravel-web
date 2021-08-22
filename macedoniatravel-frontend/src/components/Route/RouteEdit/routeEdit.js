import React from 'react';
import {useHistory} from 'react-router-dom';

const RouteEdit = (props) => {

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
        const name = formData.name !== "" ? formData.name : props.route.name;
        const description = formData.description !== "" ? formData.description : props.route.description;
        const startDate = formData.startDate !== "" ? formData.startDate : props.route.startDate;
        const endDate = formData.endDate !== "" ? formData.endDate : props.route.endDate;
        const pictures = formData.pictures !== "" ? formData.pictures : props.route.pictures;
        const routeStatus = formData.name !== 0 ? formData.routeStatus : props.route.routeStatus;
        const touristAttractions = formData.touristAttractions !== [] ? formData.touristAttractions : props.route.touristAttractions;
        const price = formData.price !== "" ? formData.price : props.route.price;

        props.onEditRoute(props.route.id, name,description,startDate,endDate, pictures, routeStatus, touristAttractions, price);
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
                               placeholder={props.route.name}
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
                            placeholder={props.route.description}
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
                               placeholder={props.route.startDate}
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
                               placeholder={props.route.endDate}
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Route status</label>
                        <select name="routeStatus" className="form-control" onChange={handleChange}>
                            {props.routeStatuses.map((term) => {
                                if (props.route.routeStatus !== 0 &&
                                    props.route.routeStatus === term)
                                    return <option selected={props.route.routeStatus}
                                                   value={term}>{term}</option>
                                else return <option value={term}>{term}</option>
                            })}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Pictures</label>
                        <input type="text"
                               className="form-control"
                               id="pictures"
                               name="pictures"
                               required
                               placeholder={props.route.pictures}
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
                            placeholder={props.route.price}
                            onChange={handleChange}
                        />
                    </div>
                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default RouteEdit;
